window.addEventListener('load', function() {
  const body = document.body;
  const htmlElement = body.parentNode;
  const headerBurgerMenu = document.getElementById('header-burger-menu');
  const burgerButtonContainer = document.getElementById('burger-button-container');
  const burgerCloseButton = document.getElementById('burger-menu-close-button');
  const overlay = document.getElementById('burger-menu-overlay');

  body.classList.remove('with-spinner');

  document.querySelector('body').addEventListener("click", function(e) {
    if (e.target===burgerCloseButton || burgerCloseButton.contains(e.target) || (!headerBurgerMenu.contains(e.target) && !burgerButtonContainer.contains(e.target)) || e.target.classList.contains('burger-menu-link')) {
      headerBurgerMenu.classList.remove('burger-menu-expanded');
      overlay.classList.remove('visible');
      body.classList.remove('with-overlay');
      htmlElement.classList.remove('with-overlay');
    }
  });

  document.querySelector('.burger-button').addEventListener("click", function() {
    headerBurgerMenu.classList.add('burger-menu-expanded');
    overlay.classList.add('visible');
    body.classList.add('with-overlay');
    htmlElement.classList.add('with-overlay');
  });

  Array.prototype.forEach.call(document.querySelectorAll('.popup-link'), function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      const url = e.currentTarget.href;
      window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=785,height=600");
    });
  }); 
  // document.querySelectorAll('.popup-link').addEventListener("click", 

  Array.prototype.forEach.call(document.querySelectorAll('.action-with-spinner'), function(item) {
    item.addEventListener('click', function(e) {
      // body.classList.add('with-spinner');
    });
  });
});

function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.classList.add('generic-modal-open');
  document.querySelector('html').classList.add('generic-modal-open');
}

function closeModal() {
  document.querySelector('.generic-modal.open').classList.remove('open');
  document.body.classList.remove('generic-modal-open');
  document.querySelector('html').classList.remove('generic-modal-open');
}

window.addEventListener('load', function() {
  document.getElementById('hide-cookie-notice').addEventListener('click', function() {
    document.getElementById('cookie-notice').style.display = "none";
  });

  // Array.prototype.forEach.call(document.querySelectorAll('.login-link'), function(item) {
  //   item.addEventListener('click', function(e) {
  //     openModal('modal-1');
  //     e.preventDefault();
  //     return false;
  //   });
  // });

  // Array.prototype.forEach.call(document.querySelectorAll('.close-login-modal'), function(item) {
  //   item.addEventListener('click', function(e) {
  //     closeModal();
  //   });
  // });

  Array.prototype.forEach.call(document.querySelectorAll('a'), function(item) {
    item.addEventListener('click', function(e) {
      openModal('modal-2');
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });

  // Array.prototype.forEach.call(document.querySelectorAll('.close-login-modal'), function(item) {
  //   item.addEventListener('click', function(e) {
  //     closeModal();
  //   });
  // });

  Array.prototype.forEach.call(document.querySelectorAll('.close-message-modal'), function(item) {
    item.addEventListener('click', function(e) {
      closeModal();
    });
  });

  document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
    var glider = Glider(this);
  });

  // close modals on background click
  document.addEventListener('click', event => {
    if (event.target.classList.contains('generic-modal')) {
      closeModal();
    }
  });

  window._ = new Glider(document.querySelector('.recent-projects-slides'), {
      // slidesToShow: 1, //'auto',
      slidesToShow: 'auto', //'auto',
      slidesToScroll: 1,
      itemWidth: 300,
      draggable: true,
      scrollLock: false,
      // dots: '#dots',
      exactWidth: true,
      rewind: true,
      arrows: {
        prev: '.recent-projects-previous',
        next: '.recent-projects-next'
      },
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 'auto',
            itemWidth: 420,
            slidesToShow: 'auto',
            exactWidth: true
          }
        }
      ]
  });

  window._ = new Glider(document.querySelector('.popular-projects-slides'), {
      // slidesToShow: 1, //'auto',
      slidesToShow: 'auto', //'auto',
      slidesToScroll: 1,
      itemWidth: 300,
      draggable: true,
      scrollLock: false,
      // dots: '#dots',
      exactWidth: true,
      rewind: true,
      arrows: {
        prev: '.popular-projects-previous',
        next: '.popular-projects-next'
      },
      responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToScroll: 'auto',
            itemWidth: 300,
            slidesToShow: 'auto',
            exactWidth: true
          }
        }
      ]
  });
});

(function () {
  window.onpageshow = function(event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
})();

// window.addEventListener('load', function() {
//   openModal('modal-2');
// });