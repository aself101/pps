(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('./components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Section = require('./components/Section');

var _Section2 = _interopRequireDefault(_Section);

var _Section3 = require('./components/Section2');

var _Section4 = _interopRequireDefault(_Section3);

var _parallax = require('./components/parallax');

var _parallax2 = _interopRequireDefault(_parallax);

var _data = require('./components/data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.send_email = _this.send_email.bind(_this);
    _this.stopSubmit = _this.stopSubmit.bind(_this);
    _this.state = {
      name: '',
      phone: '',
      email: '',
      location: '',
      services: [],
      description: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'stopSubmit',
    value: function stopSubmit(evt) {
      evt.preventDefault();
      return false;
    }
  }, {
    key: 'send_email',
    value: function send_email() {
      var data = this.state;
      $.ajax({
        type: 'GET',
        url: 'php/email.php',
        dataType: 'json',
        cache: false,
        data: { data: data },
        success: function success(data) {
          console.log(data);
          Materialize.toast('Your request was sent!', 3000, 'userSuccess');
        },
        error: function error(xhr, status, err) {
          console.error(xhr, status, err.toString());
        }
      });
    }
  }, {
    key: 'onClick',
    value: function onClick(evt) {
      var _this2 = this;

      evt.preventDefault();
      var name = $('#first_name').val() + ' ' + $('#last_name').val();
      var s = [];
      $("#services option:selected").each(function () {
        if ($(this).text() !== "") s.push($(this).text());
      });

      this.setState({
        name: name,
        phone: $('#phone').val(),
        email: $('#email').val(),
        location: $('#location option:selected').text(),
        description: $('#description').val(),
        services: s
      }, function () {
        _this2.send_email();
      });
      reset();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'index-banner', className: 'parallax-container' },
          _react2.default.createElement(
            'div',
            { className: 'section no-pad-bot' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'surround' },
                _react2.default.createElement(
                  'div',
                  { className: 'pop-out' },
                  _react2.default.createElement(
                    'h1',
                    { className: 'header center text-lighten-2' },
                    'Professional Property Services'
                  ),
                  _react2.default.createElement(
                    'h5',
                    { className: 'center' },
                    'A Big Island of Hawai\'i Based Company'
                  )
                ),
                _react2.default.createElement('div', { className: 'background1' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'row center' },
                _react2.default.createElement('h5', { className: 'header col s12 light' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'row center' },
                _react2.default.createElement(
                  'a',
                  { href: '#requestQuote', className: 'btn-large waves-effect waves-light teal lighten-1 modal-trigger' },
                  'Request a Quote'
                )
              ),
              _react2.default.createElement(_Modal2.default, { id: "requestQuote", onClick: this.onClick, onSubmit: this.stopSubmit })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'parallax' },
            _react2.default.createElement('img', { src: 'img/tools.jpg', alt: '' })
          )
        ),
        _react2.default.createElement(_Section2.default, null),
        _react2.default.createElement(_parallax2.default, { img: "img/screwsdowelwasher.jpg" }),
        _react2.default.createElement(_Section4.default, null),
        _react2.default.createElement(_parallax2.default, { img: "img/screwSelection.jpg" })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
;

function reset() {
  document.getElementById('first_name').value = '';
  document.getElementById('last_name').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('email').value = '';
  document.getElementById('location').value = '';
  document.getElementById('description').value = '';
}

},{"./components/Modal":4,"./components/Section":6,"./components/Section2":7,"./components/data":9,"./components/parallax":10,"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer(props) {
  var links = props.links;

  return _react2.default.createElement(
    "footer",
    { className: "page-footer teal" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col l6 s12" },
          _react2.default.createElement(
            "h5",
            { className: "white-text" },
            "Professional Property Services, LLC"
          ),
          _react2.default.createElement(
            "p",
            { className: "grey-text text-lighten-4" },
            "We are locally owned and operated and provide high quality and reliable property maintenance services to the island of Hawai'i."
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "footer-copyright" },
      _react2.default.createElement(
        "div",
        { className: "container" },
        "Made by ",
        _react2.default.createElement(
          "span",
          { className: "brown-text text-lighten-3" },
          "Okstory"
        )
      )
    )
  );
}

},{"react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = Select;
exports.SelectMultiple = SelectMultiple;
exports.Input = Input;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Select(props) {
  var _class = props._class;
  var id = props.id;
  var options = props.options;
  var label = props.label;


  return _react2.default.createElement(
    "div",
    { className: "input-field col s12" },
    _react2.default.createElement(
      "select",
      { id: id },
      _react2.default.createElement("option", { defaultValue: "", disabled: true }),
      options.map(function (opt) {
        return _react2.default.createElement(
          "option",
          { key: opt.val, value: opt.val },
          opt.val
        );
      })
    ),
    _react2.default.createElement(
      "label",
      null,
      label
    )
  );
}

function SelectMultiple(props) {
  var _class = props._class;
  var id = props.id;
  var options = props.options;
  var label = props.label;


  return _react2.default.createElement(
    "div",
    { className: "input-field col s12" },
    _react2.default.createElement(
      "select",
      { multiple: true, id: id },
      _react2.default.createElement("option", { defaultValue: "", disabled: true }),
      options.map(function (opt) {
        return _react2.default.createElement(
          "option",
          { key: opt.val, value: opt.val },
          opt.val
        );
      })
    ),
    _react2.default.createElement(
      "label",
      null,
      label
    )
  );
}

function Input(props) {
  var type = props.type;
  var id = props.id;
  var label = props.label;


  return _react2.default.createElement(
    "div",
    { className: "input-field col s12" },
    _react2.default.createElement("input", { id: id, type: type }),
    _react2.default.createElement(
      "label",
      { htmlFor: id },
      label
    )
  );
}

/* END */

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Inputs = require('./Inputs');

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// "requestQuote"

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

    _this.stopSubmit = _this.stopSubmit.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'stopSubmit',
    value: function stopSubmit(evt) {
      evt.preventDefault();
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: 'modal modal-fixed-footer' },
        _react2.default.createElement(
          'form',
          { onSubmit: this.stopSubmit, className: 'col s12', id: 'myForm' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            _react2.default.createElement(
              'center',
              null,
              _react2.default.createElement(
                'h4',
                { id: 'contact' },
                'Contact Form'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(_Inputs.Input, { type: "text", id: "first_name", label: "First Name" }),
                  _react2.default.createElement(_Inputs.Input, { type: "text", id: "last_name", label: "Last Name" })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(_Inputs.Input, { type: "text", id: "phone", label: "Phone" }),
                  _react2.default.createElement(_Inputs.Input, { type: "text", id: "email", label: "Email" })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(_Inputs.SelectMultiple, { id: "services", options: _data.services, label: "Services Offered" }),
                  _react2.default.createElement(_Inputs.Select, { id: "location", options: _data.locations, label: "Island Location" })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(_Inputs.Input, { type: "text", id: "description", label: "Description" })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-footer' },
            _react2.default.createElement(
              'a',
              { href: '', className: 'modal-action modal-close waves-effect waves-green btn-flat', onClick: this.props.onClick },
              'Send Request'
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;
;

},{"./Inputs":3,"./data":9,"react":"react"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Nav;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Nav(props) {
  var links = props.links;

  return _react2.default.createElement(
    "nav",
    { className: "white", role: "navigation" },
    _react2.default.createElement(
      "div",
      { className: "nav-wrapper container" },
      _react2.default.createElement(
        "a",
        { id: "logo-container", href: "#", className: "brand-logo" },
        "PPS"
      )
    )
  );
}

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Section;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Section(props) {
  var descriptors = props.descriptors;

  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      'div',
      { className: 'section' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col s12 m4' },
          _react2.default.createElement(
            'div',
            { className: 'icon-block' },
            _react2.default.createElement(
              'h2',
              { className: 'center brown-text' },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'trending_up'
              )
            ),
            _react2.default.createElement(
              'h5',
              { className: 'center' },
              'Professional Quality'
            ),
            _react2.default.createElement('p', { className: 'light' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s12 m4' },
          _react2.default.createElement(
            'div',
            { className: 'icon-block' },
            _react2.default.createElement(
              'h2',
              { className: 'center brown-text' },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'group'
              )
            ),
            _react2.default.createElement(
              'h5',
              { className: 'center' },
              'Customer Focused'
            ),
            _react2.default.createElement('p', { className: 'light' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s12 m4' },
          _react2.default.createElement(
            'div',
            { className: 'icon-block' },
            _react2.default.createElement(
              'h2',
              { className: 'center brown-text' },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'build'
              )
            ),
            _react2.default.createElement(
              'h5',
              { className: 'center' },
              'Range of Services'
            ),
            _react2.default.createElement('p', { className: 'light' })
          )
        )
      )
    )
  );
}

},{"./block":8,"react":"react"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Section2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Section2() {
  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "div",
      { className: "section" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col s12 center" },
          _react2.default.createElement(
            "h3",
            null,
            _react2.default.createElement("i", { className: "mdi-content-send brown-text" })
          ),
          _react2.default.createElement(
            "h4",
            null,
            "Contact"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "center-align light" },
            "Al Nally",
            _react2.default.createElement("br", null),
            "111 B Wiliwili",
            _react2.default.createElement("br", null),
            "Hilo, HI 96720",
            _react2.default.createElement("br", null),
            "Aloysiusnally@gmail.com",
            _react2.default.createElement("br", null),
            "(808) 854-7665",
            _react2.default.createElement("br", null)
          )
        )
      )
    )
  );
}

},{"react":"react"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Block;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Block(props) {
  var icon = props.icon;
  var header = props.header;

  return _react2.default.createElement(
    "div",
    { className: "col s12 m4" },
    _react2.default.createElement(
      "div",
      { className: "icon-block" },
      _react2.default.createElement(
        "h2",
        { className: "center brown-text" },
        _react2.default.createElement(
          "i",
          { className: "material-icons" },
          icon
        )
      ),
      _react2.default.createElement(
        "h5",
        { className: "center" },
        header
      ),
      _react2.default.createElement("p", { className: "light" })
    )
  );
}

},{"react":"react"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Links at bottom of page
var blocks = exports.blocks = [{ icon: "trending_up", header: "Professional Quality" }, { icon: "group", header: "Customer Focused" }, { icon: "build", header: "Range of Services" }];

// Locations where services are available
var locations = exports.locations = [{ val: "Hamakua" }, { val: "North Hilo" }, { val: "South Hilo" }, { val: "Ka'u" }, { val: "North Kohala" }, { val: "South Kohala" }, { val: "North Kona" }, { val: "South Kona" }, { val: "Puna" }];
// Services available
var services = exports.services = [{ val: "Landscaping" }, { val: "Yard Maintenance" }, { val: "Flooring / Tiling" }, { val: "Appliance Installation" }, { val: "Drywall" }, { val: "Painting" }, { val: "Plumbing" }];

/* END */

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Parallax;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//"img/screwsdowelwasher.jpg"

function Parallax(props) {
  var img = props.img;

  return _react2.default.createElement(
    "div",
    { className: "parallax-container valign-wrapper" },
    _react2.default.createElement(
      "div",
      { className: "section no-pad-bot" },
      _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "div",
          { className: "row center" },
          _react2.default.createElement("h5", { className: "header col s12 light" })
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "parallax" },
      _react2.default.createElement("img", { src: img, alt: "" })
    )
  );
}

},{"react":"react"}],11:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Nav = require('./components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Footer = require('./components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//render(<Nav />, document.getElementById('navbar'));
(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('app'));
(0, _reactDom.render)(_react2.default.createElement(_Footer2.default, null), document.getElementById('foot'));

},{"./App":1,"./components/Footer":2,"./components/Nav":5,"react":"react","react-dom":"react-dom"}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQXBwLmpzIiwic3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic3JjL2NvbXBvbmVudHMvSW5wdXRzLmpzIiwic3JjL2NvbXBvbmVudHMvTW9kYWwuanMiLCJzcmMvY29tcG9uZW50cy9OYXYuanMiLCJzcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwic3JjL2NvbXBvbmVudHMvU2VjdGlvbjIuanMiLCJzcmMvY29tcG9uZW50cy9ibG9jay5qcyIsInNyYy9jb21wb25lbnRzL2RhdGEuanMiLCJzcmMvY29tcG9uZW50cy9wYXJhbGxheC5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsRzs7O0FBQ25CLGVBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHVGQUNYLEtBRFc7O0FBRWpCLFVBQUssT0FBTCxHQUFlLE1BQUssT0FBTCxDQUFhLElBQWIsT0FBZjtBQUNBLFVBQUssVUFBTCxHQUFrQixNQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsT0FBbEI7QUFDQSxVQUFLLFVBQUwsR0FBa0IsTUFBSyxVQUFMLENBQWdCLElBQWhCLE9BQWxCO0FBQ0EsVUFBSyxLQUFMLEdBQWE7QUFDWCxZQUFNLEVBREs7QUFFWCxhQUFPLEVBRkk7QUFHWCxhQUFPLEVBSEk7QUFJWCxnQkFBVSxFQUpDO0FBS1gsZ0JBQVUsRUFMQztBQU1YLG1CQUFhO0FBTkYsS0FBYjtBQUxpQjtBQWFsQjs7OzsrQkFDVSxHLEVBQUs7QUFDZCxVQUFJLGNBQUo7QUFDQSxhQUFPLEtBQVA7QUFDRDs7O2lDQUNZO0FBQ1gsVUFBSSxPQUFPLEtBQUssS0FBaEI7QUFDQSxRQUFFLElBQUYsQ0FBTztBQUNMLGNBQU0sS0FERDtBQUVMLGFBQUssZUFGQTtBQUdMLGtCQUFV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Y0FBVCxDQUF3QixLQUF4QixDQUFoQjtBQUNBLHNCQUFPLHFEQUFQLEVBQW1CLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFuQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vY29tcG9uZW50cy9Nb2RhbCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbic7XG5pbXBvcnQgU2VjdGlvbjIgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb24yJztcbmltcG9ydCBQYXJhbGxheCBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWxsYXgnO1xuaW1wb3J0IGJsb2NrcyBmcm9tICcuL2NvbXBvbmVudHMvZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VuZF9lbWFpbCA9IHRoaXMuc2VuZF9lbWFpbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RvcFN1Ym1pdCA9IHRoaXMuc3RvcFN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHBob25lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgIHNlcnZpY2VzOiBbXSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgIH07XG4gIH1cbiAgc3RvcFN1Ym1pdChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc2VuZF9lbWFpbCgpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGU7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgdXJsOiAncGhwL2VtYWlsLnBocCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgZGF0YTogeyBkYXRhIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBNYXRlcmlhbGl6ZS50b2FzdCgnWW91ciByZXF1ZXN0IHdhcyBzZW50IScsIDMwMDAsICd1c2VyU3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoeGhyLCBzdGF0dXMsIGVyci50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG4gIG9uQ2xpY2soZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG5hbWUgPSBgJHskKCcjZmlyc3RfbmFtZScpLnZhbCgpfSAkeyQoJyNsYXN0X25hbWUnKS52YWwoKX1gO1xuICAgIGxldCBzID0gW107XG4gICAgJChcIiNzZXJ2aWNlcyBvcHRpb246c2VsZWN0ZWRcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGlmICgkKHRoaXMpLnRleHQoKSAhPT0gXCJcIilcbiAgICAgICAgcy5wdXNoKCQodGhpcykudGV4dCgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHBob25lOiAkKCcjcGhvbmUnKS52YWwoKSxcbiAgICAgIGVtYWlsOiAkKCcjZW1haWwnKS52YWwoKSxcbiAgICAgIGxvY2F0aW9uOiAkKCcjbG9jYXRpb24gb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpLFxuICAgICAgZGVzY3JpcHRpb246ICQoJyNkZXNjcmlwdGlvbicpLnZhbCgpLFxuICAgICAgc2VydmljZXM6IHNcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnNlbmRfZW1haWwoKTtcbiAgICB9KTtcbiAgICByZXNldCgpO1xuXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiaW5kZXgtYmFubmVyXCIgY2xhc3NOYW1lPVwicGFyYWxsYXgtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIG5vLXBhZC1ib3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1cnJvdW5kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3Atb3V0XCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyIGNlbnRlciB0ZXh0LWxpZ2h0ZW4tMlwiPlByb2Zlc3Npb25hbCBQcm9wZXJ0eSBTZXJ2aWNlczwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2VudGVyXCI+QSBCaWcgSXNsYW5kIG9mIEhhd2FpJ2kgQmFzZWQgQ29tcGFueTwvaDU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiaGVhZGVyIGNvbCBzMTIgbGlnaHRcIj48L2g1PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNyZXF1ZXN0UXVvdGVcIiBjbGFzc05hbWU9XCJidG4tbGFyZ2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHRlYWwgbGlnaHRlbi0xIG1vZGFsLXRyaWdnZXJcIj5SZXF1ZXN0IGEgUXVvdGU8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TW9kYWwgaWQ9e1wicmVxdWVzdFF1b3RlXCJ9IG9uQ2xpY2s9e3RoaXMub25DbGlja30gb25TdWJtaXQ9e3RoaXMuc3RvcFN1Ym1pdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWxsYXhcIj48aW1nIHNyYz1cImltZy90b29scy5qcGdcIiBhbHQ9XCJcIiAvPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNlY3Rpb24gLz5cbiAgICAgICAgPFBhcmFsbGF4IGltZz17XCJpbWcvc2NyZXdzZG93ZWx3YXNoZXIuanBnXCJ9IC8+XG4gICAgICAgIDxTZWN0aW9uMiAvPlxuICAgICAgICA8UGFyYWxsYXggaW1nPXtcImltZy9zY3Jld1NlbGVjdGlvbi5qcGdcIn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3RfbmFtZScpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0X25hbWUnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzKSB7XG4gIGNvbnN0IHsgbGlua3MgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicGFnZS1mb290ZXIgdGVhbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBsNiBzMTJcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+UHJvZmVzc2lvbmFsIFByb3BlcnR5IFNlcnZpY2VzLCBMTEM8L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00XCI+XG4gICAgICAgICAgICAgIFdlIGFyZSBsb2NhbGx5IG93bmVkIGFuZCBvcGVyYXRlZCBhbmQgcHJvdmlkZSBoaWdoIHF1YWxpdHlcbiAgICAgICAgICAgICAgYW5kIHJlbGlhYmxlIHByb3BlcnR5IG1haW50ZW5hbmNlIHNlcnZpY2VzIHRvIHRoZSBpc2xhbmQgb2YgSGF3YWknaS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbCBsMyBzMTJcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+U2V0dGluZ3M8L2g1PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiIGhyZWY9XCIjIVwiPkxpbmsgMTwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiIGhyZWY9XCIjIVwiPkxpbmsgMjwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiIGhyZWY9XCIjIVwiPkxpbmsgMzwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiIGhyZWY9XCIjIVwiPkxpbmsgNDwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBsMyBzMTJcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+Q29ubmVjdDwvaDU+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCIgaHJlZj1cIiMhXCI+TGluayAxPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCIgaHJlZj1cIiMhXCI+TGluayAyPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCIgaHJlZj1cIiMhXCI+TGluayAzPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCIgaHJlZj1cIiMhXCI+TGluayA0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29weXJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIE1hZGUgYnkgPHNwYW4gY2xhc3NOYW1lPVwiYnJvd24tdGV4dCB0ZXh0LWxpZ2h0ZW4tM1wiPk9rc3Rvcnk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0KHByb3BzKSB7XG4gIGNvbnN0IHsgX2NsYXNzLCBpZCwgb3B0aW9ucywgbGFiZWwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICA8c2VsZWN0IGlkPXtpZH0+XG4gICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCIgZGlzYWJsZWQ+PC9vcHRpb24+XG4gICAgICAgIHtcbiAgICAgICAgICBvcHRpb25zLm1hcCgob3B0KSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0LnZhbH0gdmFsdWU9e29wdC52YWx9PntvcHQudmFsfTwvb3B0aW9uPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsPntsYWJlbH08L2xhYmVsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0TXVsdGlwbGUocHJvcHMpIHtcbiAgY29uc3QgeyBfY2xhc3MsIGlkLCBvcHRpb25zLCBsYWJlbCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgIDxzZWxlY3QgbXVsdGlwbGUgaWQ9e2lkfT5cbiAgICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9XCJcIiBkaXNhYmxlZD48L29wdGlvbj5cbiAgICAgICAge1xuICAgICAgICAgIG9wdGlvbnMubWFwKChvcHQpID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHQudmFsfSB2YWx1ZT17b3B0LnZhbH0+e29wdC52YWx9PC9vcHRpb24+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dChwcm9wcykge1xuICBjb25zdCB7IHR5cGUsIGlkLCBsYWJlbCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgIDxpbnB1dCBpZD17aWR9IHR5cGU9e3R5cGV9IC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17aWR9PntsYWJlbH08L2xhYmVsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiBFTkQgKi9cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3QsIFNlbGVjdE11bHRpcGxlLCBJbnB1dCB9IGZyb20gJy4vSW5wdXRzJztcbmltcG9ydCB7IHNlcnZpY2VzIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9ucyB9IGZyb20gJy4vZGF0YSc7XG4vLyBcInJlcXVlc3RRdW90ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdG9wU3VibWl0ID0gdGhpcy5zdG9wU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cbiAgc3RvcFN1Ym1pdChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1maXhlZC1mb290ZXJcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN0b3BTdWJtaXR9IGNsYXNzTmFtZT1cImNvbCBzMTJcIiBpZD1cIm15Rm9ybVwiID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgIDxoNCBpZD1cImNvbnRhY3RcIj5Db250YWN0IEZvcm08L2g0PlxuICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPXtcInRleHRcIn0gaWQ9e1wiZmlyc3RfbmFtZVwifSBsYWJlbD17XCJGaXJzdCBOYW1lXCJ9IC8+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e1widGV4dFwifSBpZD17XCJsYXN0X25hbWVcIn0gbGFiZWw9e1wiTGFzdCBOYW1lXCJ9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPXtcInRleHRcIn0gaWQ9e1wicGhvbmVcIn0gbGFiZWw9e1wiUGhvbmVcIn0gLz5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IGlkPXtcImVtYWlsXCJ9IGxhYmVsPXtcIkVtYWlsXCJ9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RNdWx0aXBsZSBpZD17XCJzZXJ2aWNlc1wifSBvcHRpb25zPXtzZXJ2aWNlc30gbGFiZWw9e1wiU2VydmljZXMgT2ZmZXJlZFwifSAvPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QgaWQ9e1wibG9jYXRpb25cIn0gb3B0aW9ucz17bG9jYXRpb25zfSBsYWJlbD17XCJJc2xhbmQgTG9jYXRpb25cIn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e1widGV4dFwifSBpZD17XCJkZXNjcmlwdGlvblwifSBsYWJlbD17XCJEZXNjcmlwdGlvblwifSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibW9kYWwtYWN0aW9uIG1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy1ncmVlbiBidG4tZmxhdFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+U2VuZCBSZXF1ZXN0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdihwcm9wcykge1xuICBjb25zdCB7IGxpbmtzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIndoaXRlXCIgcm9sZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXIgY29udGFpbmVyXCI+XG4gICAgICAgIDxhIGlkPVwibG9nby1jb250YWluZXJcIiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5QUFM8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmxvY2sgZnJvbSAnLi9ibG9jayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgeyBkZXNjcmlwdG9ycyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ibG9ja1wiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2VudGVyIGJyb3duLXRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnRyZW5kaW5nX3VwPC9pPjwvaDI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjZW50ZXJcIj5Qcm9mZXNzaW9uYWwgUXVhbGl0eTwvaDU+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlnaHRcIj48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJsb2NrXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjZW50ZXIgYnJvd24tdGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Z3JvdXA8L2k+PC9oMj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNlbnRlclwiPkN1c3RvbWVyIEZvY3VzZWQ8L2g1PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ibG9ja1wiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2VudGVyIGJyb3duLXRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmJ1aWxkPC9pPjwvaDI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjZW50ZXJcIj5SYW5nZSBvZiBTZXJ2aWNlczwvaDU+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+XG5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb24yKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgY2VudGVyXCI+XG4gICAgICAgICAgICA8aDM+PGkgY2xhc3NOYW1lPVwibWRpLWNvbnRlbnQtc2VuZCBicm93bi10ZXh0XCI+PC9pPjwvaDM+XG4gICAgICAgICAgICA8aDQ+Q29udGFjdDwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItYWxpZ24gbGlnaHRcIj5cbiAgICAgICAgICAgICAgICBBbCBOYWxseTxiciAvPlxuICAgICAgICAgICAgICAgIDExMSBCIFdpbGl3aWxpPGJyIC8+XG4gICAgICAgICAgICAgICAgSGlsbywgSEkgOTY3MjA8YnIgLz5cbiAgICAgICAgICAgICAgICBBbG95c2l1c25hbGx5QGdtYWlsLmNvbTxiciAvPlxuICAgICAgICAgICAgICAgICg4MDgpIDg1NC03NjY1PGJyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2NrKHByb3BzKSB7XG4gIGNvbnN0IHsgaWNvbiwgaGVhZGVyIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ibG9ja1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2VudGVyIGJyb3duLXRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntpY29ufTwvaT48L2gyPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2VudGVyXCI+e2hlYWRlcn08L2g1PlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpZ2h0XCI+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJcbi8vIExpbmtzIGF0IGJvdHRvbSBvZiBwYWdlXG5leHBvcnQgY29uc3QgYmxvY2tzID0gW1xuICB7IGljb246IFwidHJlbmRpbmdfdXBcIiwgaGVhZGVyOiBcIlByb2Zlc3Npb25hbCBRdWFsaXR5XCIgfSxcbiAgeyBpY29uOiBcImdyb3VwXCIsIGhlYWRlcjogXCJDdXN0b21lciBGb2N1c2VkXCIgfSxcbiAgeyBpY29uOiBcImJ1aWxkXCIsIGhlYWRlcjogXCJSYW5nZSBvZiBTZXJ2aWNlc1wiIH1cbl07XG5cbi8vIExvY2F0aW9ucyB3aGVyZSBzZXJ2aWNlcyBhcmUgYXZhaWxhYmxlXG5leHBvcnQgY29uc3QgbG9jYXRpb25zID0gW1xuICB7IHZhbDogXCJIYW1ha3VhXCIgfSxcbiAgeyB2YWw6IFwiTm9ydGggSGlsb1wiIH0sXG4gIHsgdmFsOiBcIlNvdXRoIEhpbG9cIiB9LFxuICB7IHZhbDogXCJLYSd1XCIgfSxcbiAgeyB2YWw6IFwiTm9ydGggS29oYWxhXCIgfSxcbiAgeyB2YWw6IFwiU291dGggS29oYWxhXCIgfSxcbiAgeyB2YWw6IFwiTm9ydGggS29uYVwiIH0sXG4gIHsgdmFsOiBcIlNvdXRoIEtvbmFcIiB9LFxuICB7IHZhbDogXCJQdW5hXCIgfVxuXTtcbi8vIFNlcnZpY2VzIGF2YWlsYWJsZVxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzID0gW1xuICB7IHZhbDogXCJMYW5kc2NhcGluZ1wiIH0sXG4gIHsgdmFsOiBcIllhcmQgTWFpbnRlbmFuY2VcIiB9LFxuICB7IHZhbDogXCJGbG9vcmluZyAvIFRpbGluZ1wiIH0sXG4gIHsgdmFsOiBcIkFwcGxpYW5jZSBJbnN0YWxsYXRpb25cIiB9LFxuICB7IHZhbDogXCJEcnl3YWxsXCIgfSxcbiAgeyB2YWw6IFwiUGFpbnRpbmdcIiB9LFxuICB7IHZhbDogXCJQbHVtYmluZ1wiIH1cbl07XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qIEVORCAqL1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy9cImltZy9zY3Jld3Nkb3dlbHdhc2hlci5qcGdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbGxheChwcm9wcykge1xuICBjb25zdCB7IGltZyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheC1jb250YWluZXIgdmFsaWduLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBuby1wYWQtYm90XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY2VudGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiaGVhZGVyIGNvbCBzMTIgbGlnaHRcIj48L2g1PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheFwiPjxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiIC8+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuaW1wb3J0IE5hdiBmcm9tICcuL2NvbXBvbmVudHMvTmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbi8vcmVuZGVyKDxOYXYgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKSk7XG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbnJlbmRlcig8Rm9vdGVyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdCcpKTtcbiJdfQ==
