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
  var tabledata = [
    {
      id: 1,
      name: 'Shawarma Plus',
      description: 'Authentic Mediterranean cuisine prepared with love',
      price_level: '$$',
      address: '220 King St N, Waterloo, ON N2J 2Y7, Canada',
      menu_items: [
        {
          title: 'Disposable Cutlery',
          description: '',
          price: '0.25',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: [],
          add_ons: [],
        },
        {
          title: 'Napkins & Disposable Plates',
          description: '',
          price: '0.25',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: [],
          add_ons: [],
        },
        {
          title: 'Baqlawah (Small Container of 4)',
          description: 'Baqlawah (Small Container of 4)',
          price: '4.99',
          price_kind: '',
          min_people: 2,
          max_people: 4,
          tags: ['Desserts', 'Middle Eastern', 'Desserts'],
          add_ons: [],
        },
        {
          title: 'Assorted Pop',
          description: 'Root beer, iced tea, ginger ale, crush orange, 7-up, coke zero, diet coke, coke. ',
          price: '1.99',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: [],
          add_ons: [],
        },
        {
          title: 'Chicken Shawarma (Half a Lbs)',
          description: 'Chicken',
          price: '8.99',
          price_kind: '',
          min_people: 1,
          max_people: 1,
          tags: ['Side-Dishes'],
          add_ons: [],
        },
        {
          title: 'Chicken Shawarma Plate',
          description: 'Chicken shawarma served with rice and choice of raw veggies, Arabic salad or fattoush salad. Includes pita bread, garlic sauce, and hot sauce.',
          price: '14.49',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: [],
          add_ons: [
            {
              category: 'Add-Ons',
              units: [
                {name: 'Shawarma Nachos', price: '7.99'},
                {name: 'Hummus', price: '3.5'},
                {name: 'Muttabal (Eggplant)', price: '3.5'},
                {name: 'Hummus & Muttabal', price: '4.99'},
              ],
            },
            {category: 'Sides', units: [{name: 'Rice + Pita', price: '0.0'}]},
            {
              category: 'Salad',
              units: [
                {name: 'Raw Veggies', price: '0.0'},
                {name: 'Arabic Salad', price: '0.0'},
                {name: 'Fattoush Salad', price: '0.0'},
                {name: 'Tabbouleh salad', price: '1.5'},
              ],
            },
            {
              category: 'Main',
              units: [{name: 'Chicken Shawarma', price: '0.0'}],
            },
            {
              category: 'Sauces',
              units: [{name: 'Garlic Sauce + Hot Sauce', price: '0.0'}],
            },
          ],
        },
        {
          title: 'Hummus and Olive Oil Dip',
          description: 'Hummus and Olive Oil Dip',
          price: '6.99',
          price_kind: '',
          min_people: 2,
          max_people: 4,
          tags: ['Vegetarian', 'Side-Dishes'],
          add_ons: [],
        },
        {
          title: 'Bottled Water',
          description: '',
          price: '1.99',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: [],
          add_ons: [],
        },
        {
          title: 'Chicken Shawarma Wrap',
          description: 'Chicken shawarma wrap, stuffed with tomatoes, lettuce, onions, pickles, garlic, and hot sauce.',
          price: '7.75',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: [],
          add_ons: [
            {
              category: 'Add-Ons',
              units: [
                {name: 'Hummus', price: '2.5'},
                {name: 'Muttabal (Eggplant)', price: '2.5'},
                {name: 'Hummus & Muttabal', price: '3.75'},
                {name: 'Shawarma Nachos', price: '7.99'},
              ],
            },
            {
              category: 'Wrap',
              units: [{name: 'Chicken Shawarma Wrap', price: '0.0'}],
            },
          ],
        },
        {
          title: 'Shawarma Nachos',
          description: 'Snack size shawarma nachos ',
          price: '9.99',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: [
            'Mexican',
            'Mediterranean',
            'Appetizers',
            'Snacks',
            'Side-Dishes',
          ],
          add_ons: [],
        },
        {
          title: 'Dawoud Basha',
          description: 'Kebabs cooked in the broth of tomatoes with potatoes, has a hint of spice, and served with rice & side salad.',
          price: '14.5',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: ['Mediterranean', 'Entrées', 'Gluten-Free'],
          add_ons: [],
        },
        {
          title: 'Canned Juices',
          description: 'Assorted canned fruit juices. ',
          price: '1.99',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: [],
          add_ons: [],
        },
        {
          title: 'Falafel Wrap',
          description: 'Falafel wrap, stuffed with tomatoes, pickles, parsely, cucumbers, and tahini sauce.',
          price: '7.95',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: [],
          add_ons: [
            {
              category: 'Add-Ons',
              units: [
                {name: 'Hummus', price: '2.5'},
                {name: 'Muttabal (Eggplant)', price: '2.5'},
                {name: 'Hummus & Muttabal', price: '3.75'},
                {name: 'Shawarma Nachos', price: '7.99'},
              ],
            },
            {category: 'Wrap', units: [{name: 'Falafel Wrap', price: '0.0'}]},
          ],
        },
        {
          title: 'Falafel Plate',
          description: 'Falafel (5 pieces) served with rice and choice of raw veggies, Arabic salad or fattoush salad. Includes pita bread, garlic sauce and hot sauce.',
          price: '14.99',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: [],
          add_ons: [
            {category: 'Sides', units: [{name: 'Rice + Pita', price: '0.0'}]},
            {
              category: 'Salad',
              units: [
                {name: 'Raw Veggies', price: '0.0'},
                {name: 'Arabic Salad', price: '0.0'},
                {name: 'Fattoush Salad', price: '0.0'},
                {name: 'Tabbouleh Salad', price: '1.5'},
              ],
            },
            {
              category: 'Add-Ons',
              units: [
                {name: 'Hummus', price: '2.5'},
                {name: 'Mutabal (Eggplant)', price: '2.5'},
                {name: 'Hummus & Muttabal', price: '3.75'},
                {name: 'Shawarma Nachos', price: '7.99'},
              ],
            },
            {category: 'Main', units: [{name: 'Falafel', price: '0.0'}]},
            {
              category: 'Sauces',
              units: [{name: 'Garlic Sauce + Hot Sauce', price: '0.0'}],
            },
          ],
        },
        {
          title: "Huraq Isba'oo (vegan)",
          description: 'Celery, Lentils, onions, garlic, pomegranate & other vegetables cooked together to perfection & topped with fried pita chips & fried caramelized onions. Served with side salad',
          price: '14.0',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: ['Mediterranean', 'Vegan', 'Entrées'],
          add_ons: [],
        },
        {
          title: 'Mojadara / Koshari (vegan)',
          description: 'Rice with lentils topped with fried caramelized onions and homemade hot sauce.  Served with pickles, turnibs & side salad.',
          price: '14.0',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: [
            'Gluten-Free',
            'Egg-Free',
            'Dairy-Free',
            'Mediterranean',
            'Vegan',
            'Entrées',
          ],
          add_ons: [],
        },
        {
          title: 'Chicken Shawarma Salad',
          description: 'Chicken shawarma on top of a salad with; tomatoes, lettuce, onions, pickles, garlic & hot sauce.',
          price: '12.0',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: ['Salads & Bowls', 'Mediterranean'],
          add_ons: [
            {
              category: 'Add Ons',
              units: [
                {name: 'No Add Ons', price: '0.0'},
                {name: 'Hummus', price: '2.5'},
                {name: 'Muttabal (Eggplant)', price: '2.5'},
                {name: 'Hummus & Muttabal', price: '3.75'},
              ],
            },
            {
              category: 'Salad',
              units: [{name: 'Chicken Shawarma Salad', price: '0.0'}],
            },
          ],
        },
        {
          title: 'Veal and Lamb Shawarma Salad',
          description: 'A mix of Veal and Lamb on top of a salad with; tomatoes, lettuce, onions, pickles, garlic & hot sauce.',
          price: '13.99',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: ['Mediterranean', 'Salads & Bowls'],
          add_ons: [
            {
              category: 'Add Ons',
              units: [
                {name: 'Hummus', price: '2.5'},
                {name: 'Muttabal (Eggplant)', price: '2.5'},
                {name: 'Hummus & Muttabal', price: '3.75'},
              ],
            },
            {
              category: 'Salad',
              units: [{name: 'Chicken Shawarma Salad', price: '0.0'}],
            },
          ],
        },
        {
          title: 'Rice',
          description: '',
          price: '3.5',
          price_kind: 'Serves Family Style',
          min_people: 1,
          max_people: null,
          tags: ['Side-Dishes'],
          add_ons: [],
        },
      ],
    },
  ];

  var menuBtn = function (cell, formatterParams, onRendered) {
    //plain text value
    return '<button class="ui primary button">Show Menu</button>';
  };

  if ($ ('#restaurantsBasicTable').length) {
    $ ('#restaurantsBasicTable').tablesort ();
    $ ('#restaurantsBasicTable tr > *:nth-child(6)').hide ();
  }

  if (window.location.href.indexOf ('companies') != -1) {
    var table = new Tabulator ('#example-table', {
      data: tabledata, //assign data to table
      layout: 'fitColumns', //fit columns to width of table (optional)
      columns: [
        //Define Table Columns
        {title: 'Name', field: 'name'},
        {title: 'Description', field: 'description'},
        {title: 'Price Range', field: 'price_level'},
        {title: 'Address', field: 'address'},
        {
          title: 'Menu',
          formatter: menuBtn,
          align: 'center',
          cellClick: function (e, cell) {
            // alert ('Printing row data for: ' + cell.getRow ().getData ().name);
            const id = cell.getRow ().getData ().id;
            $ ('.subTable' + id + '').toggle ();
          },
        },
      ],
      rowFormatter: function (row) {
        //create and style holder elements
        var holderEl = document.createElement ('div');
        var tableEl = document.createElement ('div');

        holderEl.style.boxSizing = 'border-box';
        holderEl.style.padding = '10px 30px 10px 10px';
        holderEl.style.borderTop = '1px solid #333';
        holderEl.style.borderBotom = '1px solid #333';
        holderEl.style.background = '#ddd';
        const id = row.getData ().id;
        holderEl.setAttribute ('class', 'subTable' + id);

        tableEl.style.border = '1px solid #333';

        holderEl.appendChild (tableEl);

        row.getElement ().appendChild (holderEl);

        var subTable = new Tabulator (tableEl, {
          layout: 'fitColumns',
          data: row.getData ().menu_items,
          columns: [
            {title: 'Title', field: 'title'},
            {title: 'Description', field: 'description'},
            {title: 'Price', field: 'price'},
            {title: 'Tags', field: 'tags'},
          ],
        });
      },
      rowClick: function (e, row) {
        //trigger an alert message when the row is clicked
        // alert ('Row ' + row.getData ().id + ' Clicked!!!!');
      },
      renderComplete: function () {
        $ ('.subTable1').hide ();
      },
    });
  }

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

$ ('#loadDoShackMenu').click (function () {
  $ ('.ui.modal.menu').modal ('show');
  $ ('#resMenu').attr ('src', 'https://www.doshack.ca/#menu-section');
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

// $ ('#loadiPotatoMenu').click (function () {
//   $ ('.nomenu').modal ('show');
// });

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
    x[i].style.display = 'null';
  }
  x[slideIndex - 1].style.display = 'block';
}
