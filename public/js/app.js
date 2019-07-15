function elementInViewport (el) {
  var elementTop = $ (el).offset ().top;
  var elementBottom = elementTop + $ (el).outerHeight ();
  var viewportTop = $ (window).scrollTop ();
  var viewportBottom = viewportTop + $ (window).height ();
  return elementBottom > viewportTop && elementTop < viewportBottom;
}

var bouncer = null;

$ (window).on ('resize scroll', function () {
  //Code here
  const restTable = document.getElementsByClassName ('restaurants-list');
  if (elementInViewport (restTable)) {
    $ ('#scrollDownBtn').hide ();
    clearInterval (bouncer);
  } else {
    $ ('#scrollDownBtn').show ();
  }
});

(function () {
  // Get a reference to the table
  let tableRef = document.getElementById ('allRestaurants');
  fetch ('https://dashboard.uwbiteclub.com/api/biteclub/restaurants')
    .then (res => res.json ())
    .then (response => {
      console.log (response);
      if (response.hasOwnProperty ('list')) {
        const all_restaurants = response['list'];
        all_restaurants.forEach (restaurant => {
          // Insert a row at the end of the table
          let newRow = tableRef.insertRow (-1);

          // Insert a cell in the row at index 0
          let newCell = newRow.insertCell (0);
          // Append a text node to the cell
          let newText = document.createTextNode (restaurant['name']);
          newCell.appendChild (newText);

          newCell = newRow.insertCell (1);
          restaurant['categories'].forEach (category => {
            let newText = document.createElement ('div');
            newText.setAttribute ('class', 'ui label');
            newText.textContent = category;
            newCell.appendChild (newText);
          });

          newCell = newRow.insertCell (2);
          newText = document.createTextNode (restaurant['rating']);
          newCell.appendChild (newText);

          newCell = newRow.insertCell (3);
          newText = document.createTextNode (
            restaurant['address'].slice (0, -1).join ()
          );
          newCell.appendChild (newText);

          newCell = newRow.insertCell (4);
          newText = document.createTextNode (restaurant['price']);
          newCell.appendChild (newText);
        });
        $ ('#loadingRestaurants').hide ();
        $ ('#allRestaurants').removeClass ('hidden');
      }
    })
    .catch (error => console.error ('Error:', error));

  $ ('table').tablesort ();

  const restTable = document.getElementsByClassName ('restaurants-list');
  if (elementInViewport (restTable)) {
    $ ('#scrollDownBtn').hide ();
  } else {
    $ ('#scrollDownBtn').show ();
  }

  bouncer = setInterval (function () {
    const restTable = document.getElementsByClassName ('restaurants-list');
    if (elementInViewport (restTable)) {
      $ ('#scrollDownBtn').hide ();
    } else {
      $ ('#scrollDownBtn').show ();
      $ ('#scrollDownBtn').transition ('bounce', '1500ms');
    }
  }, 5000);
}) ();

$ ('.email').on ('change keyup paste', function () {
  if ($ (this).val ()) {
    $ ('.icon-paper-plane').addClass ('next');
  } else {
    $ ('.icon-paper-plane').removeClass ('next');
  }
});

$ ('.next-button').hover (function () {
  $ (this).css ('cursor', 'pointer');
});

$ ('.ui.accordion').accordion ();

$ ('.next-button.email').click (function () {
  console.log ('Something');
  $ ('.email-section').addClass ('fold-up');
  $ ('.password-section').removeClass ('folded');
});

$ ('#loadFreshBurritoMenu').click (function () {
  $ ('.ui.modal.menu').modal ('show');
  $ ('#resMenu').attr ('src', 'https://freshburrito.ca/our-menu/');
});

$ ('#loadShawermaPlusMenu').click (function () {
  $ ('.ui.modal.menu').modal ('show');
  $ ('#resMenu').attr ('src', 'https://www.shawermaplus.com/menu/wraps');
});

$ ('#loadCampusPizzaMenu').click (function () {
  $ ('.ui.modal.menu').modal ('show');
  $ ('#resMenu').attr ('src', 'http://www.campuspizza.ca/?page=menu');
});

$ ('#loadAuntysKitchenMenu').click (function () {
  $ ('.ui.modal.menu').modal ('show');
  $ ('#resMenu').attr ('src', 'https://www.auntyskitchen.ca/catering');
});

$ ('#loadSubwayMenu').click (function () {
  $ ('.ui.modal.menu').modal ('show');
  $ ('#resMenu').attr (
    'src',
    'https://www.subway.com/en-US/Catering/CateringProducts'
  );
});

$ ('#loadKabobHutMenu').click (function () {
  $ ('.ui.modal.menu').modal ('show');
  $ ('#resMenu').attr ('src', 'http://www.kabobhutcanada.com/#menu');
});

$ ('.ui.modal.menu').modal ({
  onHide: function () {
    $ ('#resMenu').attr ('src', '');
  },
  onShow: function () {
    console.log ('shown');
  },
});

$ ('#loadiPotatoMenu').click (function () {
  $ ('.nomenu').modal ('show');
});

$ ('#firstTimeUser').click (function () {
  $ ('#firstTimeUser').addClass ('loading');
  Cognito.load ('forms', {id: '2'});
  $ ('.formMenu').hide ();
  $ ('.existingUserCodeInput').addClass ('hidden');
  $ ('.eventCodeError').addClass ('hidden');
});

$ ('#existingUser').click (function () {
  $ ('.existingUserCodeInput').removeClass ('hidden');
});

$ ('#scrollDownBtn').click (function () {
  $ ('html, body').animate ({scrollTop: document.body.scrollHeight}, 'slow');
});

$ ('#existingUserCode').on ('input', function () {
  $ ('.eventCodeError').addClass ('hidden');
});

$ ('#searchCode').click (function () {
  $ ('#searchCode').addClass ('loading');
  $ ('.existingUserCodeInput').addClass ('disabled');
  const code = $ ('#existingUserCode').val ();
  if (code === 'abcd') {
    Cognito.load ('forms', {id: '2'});
    $ ('.existingUserCodeInput').addClass ('hidden');
    $ ('.formMenu').hide ();
  } else {
    $ ('.existingUserCodeInput').removeClass ('disabled');
    $ ('#searchCode').removeClass ('loading');
    $ ('.eventCodeError').removeClass ('hidden');
  }
});

$ ('.password').on ('change keyup paste', function () {
  if ($ (this).val ()) {
    $ ('.icon-lock').addClass ('next');
  } else {
    $ ('.icon-lock').removeClass ('next');
  }
});

$ ('.next-button').hover (function () {
  $ (this).css ('cursor', 'pointer');
});

$ ('.next-button.password').click (function () {
  console.log ('Something');
  $ ('.password-section').addClass ('fold-up');
  $ ('.repeat-password-section').removeClass ('folded');
});

$ ('.repeat-password').on ('change keyup paste', function () {
  if ($ (this).val ()) {
    $ ('.icon-repeat-lock').addClass ('next');
  } else {
    $ ('.icon-repeat-lock').removeClass ('next');
  }
});

$ (':input[type="submit"]').prop ('disabled', true);

// $('.repeat-password-section').keyup(function() {
//   console.log('here');
// if($(this).val() != '') {
//
// }
// });
// });

$ ('.next-button.repeat-password').click (function () {
  console.log ('Something -in - here');
  $ (':input[type="submit"]').prop ('disabled', false);
  $ ('.repeat-password-section').addClass ('fold-up');
  $ ('.success').css ('marginTop', 0);
});

var slideIndex = 1;
showDivs (slideIndex);

function plusDivs (n) {
  showDivs ((slideIndex += n));
}

function showDivs (n) {
  var i;
  var x = document.getElementsByClassName ('mySlides');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}
