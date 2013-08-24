(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], function($) {
      factory($, root);
    });
  }
  else {
    factory(root.jQuery, root);
  }
})(this, function($, window, undefined) {

  var Status = function($el, overrides) {
    this.$el = $el;
    this.options = $.extend({}, $.fn.status.defaults, overrides);
    $el.html(this.options.template);
    this.$message = $el.find(this.options.messageSelector)
    this.state(this.options.initialState);
    this.message(this.options.initialMessage);
  };

  $.extend(Status.prototype, {
    message: function(html) {
      this.$message.html(html);
    },

    state: function(state) {
      if (state.match(/ /)) {
        $.error('jQuery Status states cannot contain spaces')
      }
      this.$el.removeClass(this.options.statePrefix + this.currentState)
              .addClass(this.options.statePrefix + state);
      this.currentState = state;
    }
  });

  $.fn.status = function() {
    var args = arguments;

    return this.each(function() {
      var $el = $(this);
      var plugin = $el.data('statePlugin');

      if (!plugin) {
        $el.data('statePlugin', new Status($el, args[0]));
      }
      else {
        plugin[args[0]](args[1]);
      }
    });
  };

  $.fn.status.defaults = {
    template: '<span class="status-message"></span>',
    messageSelector: '.status-message',
    initialMessage: '',
    initialState: 'hidden',
    statePrefix: 'is-'
  };
});