chai.should();

describe('jQuery Status', function() {
  beforeEach(function() {
    $('.sandbox').remove();
    $('body').append('<div class="sandbox" />');
  });

  describe('with default options', function() {
    beforeEach(function() {
      this.$el = $('.sandbox');
      this.$returned = this.$el.status();
    });

    it('renders the status template', function() {
      $('.status-message').should.have.length(1);
    });

    it('renders a blank initial message', function() {
      $('.status-message').html().should.be.empty;
    });

    it('adds a hidden initial state', function() {
      this.$el.hasClass('is-hidden').should.be.true;
    });

    it('returns the original jQuery object', function() {
      this.$el.should.equal(this.$returned);
    });
  });

  describe('with custom options', function() {
    beforeEach(function() {
      this.$el = $('.sandbox').status({
        template: '<span class="custom-message"></span>',
        messageSelector: '.custom-message',
        initialMessage: 'Initializing',
        initialState: 'initializing',
        statePrefix: 'currently-'
      });
    });

    it('renders the custom template', function() {
      $('.custom-message').should.have.length(1)
    });

    it('renders the custom initial message', function() {
      $('.custom-message').html().should.equal('Initializing');
    });

    it('adds the custom initial state', function() {
      this.$el.hasClass('currently-initializing').should.be.true;
    });
  });

  describe('methods', function() {
    beforeEach(function() {
      this.$el = $('.sandbox').status();
    });

    describe('#message', function() {
      beforeEach(function() {
        this.$returned = this.$el.status('message', 'New message');
      });

      it('sets the html of the message element', function() {
        $('.status-message').html().should.equal('New message');
      });

      it('returns the original jQuery object', function() {
        this.$returned.should.equal(this.$el);
      });
    });

    describe('#state', function() {
      beforeEach(function() {
        this.$returned = this.$el.status('state', 'waiting');
      });

      it('adds the new state class', function() {
        this.$el.hasClass('is-waiting').should.be.true;
      });

      it('removes the old state class', function() {
        this.$el.status('state', 'done');
        this.$el.hasClass('is-waiting').should.be.false;
      });

      it('returns the original jQuery object', function() {
        this.$returned.should.equal(this.$el)
      });

      it('throws an error if the state contains spaces', function() {
        $.proxy(function() {
          this.$el.status('state', 'illegal state')
        }, this).should.throw(/cannot contain spaces/);
      });
    });
  });
});