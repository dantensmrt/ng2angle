(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["elements-elements-module"],{

/***/ "./node_modules/ng2-dnd/ng2-dnd.es5.js":
/*!*********************************************!*\
  !*** ./node_modules/ng2-dnd/ng2-dnd.es5.js ***!
  \*********************************************/
/*! exports provided: providers, DndModule, AbstractComponent, AbstractHandleComponent, DataTransferEffect, DragImage, DragDropConfig, DragDropData, dragDropServiceFactory, DragDropService, dragDropSortableServiceFactory, DragDropSortableService, DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndModule", function() { return DndModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return AbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractHandleComponent", function() { return AbstractHandleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferEffect", function() { return DataTransferEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragImage", function() { return DragImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropConfig", function() { return DragDropConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropData", function() { return DragDropData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragDropServiceFactory", function() { return dragDropServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropService", function() { return DragDropService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragDropSortableServiceFactory", function() { return dragDropSortableServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropSortableService", function() { return DragDropSortableService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableComponent", function() { return DraggableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableHandleComponent", function() { return DraggableHandleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppableComponent", function() { return DroppableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableContainer", function() { return SortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return SortableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableHandleComponent", function() { return SortableHandleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
/**
 * Check and return true if an object is type of string
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object not undefined or null
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * Check and return true if an object is type of Function
 */
function isFunction(obj) {
    return typeof obj === "function";
}
/**
 * Create Image element with specified url string
 */
function createImage(src) {
    var img = new HTMLImageElement();
    img.src = src;
    return img;
}
/**
 * Call the function
 */
function callFun(fun) {
    return fun();
}
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var DataTransferEffect = /** @class */ (function () {
    function DataTransferEffect(name) {
        this.name = name;
    }
    return DataTransferEffect;
}());
DataTransferEffect.COPY = new DataTransferEffect('copy');
DataTransferEffect.LINK = new DataTransferEffect('link');
DataTransferEffect.MOVE = new DataTransferEffect('move');
DataTransferEffect.NONE = new DataTransferEffect('none');
var DragImage = /** @class */ (function () {
    function DragImage(imageElement, x_offset, y_offset) {
        if (x_offset === void 0) { x_offset = 0; }
        if (y_offset === void 0) { y_offset = 0; }
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (isString(this.imageElement)) {
            // Create real image from string source
            var imgScr = this.imageElement;
            this.imageElement = new HTMLImageElement();
            this.imageElement.src = imgScr;
        }
    }
    return DragImage;
}());
var DragDropConfig = /** @class */ (function () {
    function DragDropConfig() {
        this.onDragStartClass = "dnd-drag-start";
        this.onDragEnterClass = "dnd-drag-enter";
        this.onDragOverClass = "dnd-drag-over";
        this.onSortableDragClass = "dnd-sortable-drag";
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = "move";
        this.defaultCursor = "pointer";
    }
    return DragDropConfig;
}());
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var DragDropData = /** @class */ (function () {
    function DragDropData() {
    }
    return DragDropData;
}());
function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = /** @class */ (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    return DragDropService;
}());
DragDropService = __decorate$1([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], DragDropService);
function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = /** @class */ (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: function () {
            return this._elem;
        },
        enumerable: true,
        configurable: true
    });
    DragDropSortableService.prototype.markSortable = function (elem) {
        if (isPresent(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (isPresent(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    return DragDropSortableService;
}());
DragDropSortableService = __decorate$1([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [DragDropConfig])
], DragDropSortableService);
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var AbstractComponent = /** @class */ (function () {
    function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
        var _this = this;
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._cdr = _cdr;
        /**
         * Whether the object is draggable. Default is true.
         */
        this._dragEnabled = false;
        /**
         * Allows drop on this element
         */
        this.dropEnabled = false;
        this.dropZones = [];
        this.cloneItem = false;
        // Assign default cursor unless overridden
        this._defaultCursor = _config.defaultCursor;
        this._elem = elemRef.nativeElement;
        this._elem.style.cursor = this._defaultCursor; // set default cursor on our element
        //
        // DROP events
        //
        this._elem.ondragenter = function (event) {
            _this._onDragEnter(event);
        };
        this._elem.ondragover = function (event) {
            _this._onDragOver(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.dropEffect = _this._config.dropEffect.name;
            }
            return false;
        };
        this._elem.ondragleave = function (event) {
            _this._onDragLeave(event);
        };
        this._elem.ondrop = function (event) {
            _this._onDrop(event);
        };
        //
        // Drag events
        //
        this._elem.onmousedown = function (event) {
            _this._target = event.target;
        };
        this._elem.ondragstart = function (event) {
            if (_this._dragHandle) {
                if (!_this._dragHandle.contains(_this._target)) {
                    event.preventDefault();
                    return;
                }
            }
            _this._onDragStart(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.setData('text', '');
                // Change drag effect
                event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
                // Change drag image
                if (isPresent(_this.dragImage)) {
                    if (isString(_this.dragImage)) {
                        event.dataTransfer.setDragImage(createImage(_this.dragImage));
                    }
                    else if (isFunction(_this.dragImage)) {
                        event.dataTransfer.setDragImage(callFun(_this.dragImage));
                    }
                    else {
                        var img = _this.dragImage;
                        event.dataTransfer.setDragImage(img.imageElement, img.x_offset, img.y_offset);
                    }
                }
                else if (isPresent(_this._config.dragImage)) {
                    var dragImage = _this._config.dragImage;
                    event.dataTransfer.setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                }
                else if (_this.cloneItem) {
                    _this._dragHelper = _this._elem.cloneNode(true);
                    _this._dragHelper.classList.add('dnd-drag-item');
                    _this._dragHelper.style.position = "absolute";
                    _this._dragHelper.style.top = "0px";
                    _this._dragHelper.style.left = "-1000px";
                    _this._elem.parentElement.appendChild(_this._dragHelper);
                    event.dataTransfer.setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
                }
                // Change drag cursor
                var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
                if (_this._dragEnabled) {
                    cursorelem.style.cursor = _this.effectCursor ? _this.effectCursor : _this._config.dragCursor;
                }
                else {
                    cursorelem.style.cursor = _this._defaultCursor;
                }
            }
        };
        this._elem.ondragend = function (event) {
            if (_this._elem.parentElement && _this._dragHelper) {
                _this._elem.parentElement.removeChild(_this._dragHelper);
            }
            // console.log('ondragend', event.target);
            _this._onDragEnd(event);
            // Restore style of dragged element
            var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
            cursorelem.style.cursor = _this._defaultCursor;
        };
    }
    Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        set: function (enabled) {
            this._dragEnabled = !!enabled;
            this._elem.draggable = this._dragEnabled;
        },
        enumerable: true,
        configurable: true
    });
    AbstractComponent.prototype.setDragHandle = function (elem) {
        this._dragHandle = elem;
    };
    /******* Change detection ******/
    AbstractComponent.prototype.detectChanges = function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            if (_this._cdr && !_this._cdr.destroyed) {
                _this._cdr.detectChanges();
            }
        }, 250);
    };
    //****** Droppable *******//
    AbstractComponent.prototype._onDragEnter = function (event) {
        // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragEnterCallback(event);
        }
    };
    AbstractComponent.prototype._onDragOver = function (event) {
        // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // The element is over the same source element - do nothing
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            this._onDragOverCallback(event);
        }
    };
    AbstractComponent.prototype._onDragLeave = function (event) {
        // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragLeaveCallback(event);
        }
    };
    AbstractComponent.prototype._onDrop = function (event) {
        // console.log('ondrop._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // Necessary. Allows us to drop.
            this._preventAndStop(event);
            this._onDropCallback(event);
            this.detectChanges();
        }
    };
    AbstractComponent.prototype._isDropAllowed = function (event) {
        if ((this._dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
            // First, if `allowDrop` is set, call it to determine whether the
            // dragged element can be dropped here.
            if (this.allowDrop) {
                return this.allowDrop(this._dragDropService.dragData);
            }
            // Otherwise, use dropZones if they are set.
            if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
                return true;
            }
            for (var i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                var dragZone = this._dragDropService.allowedDropZones[i];
                if (this.dropZones.indexOf(dragZone) !== -1) {
                    return true;
                }
            }
        }
        return false;
    };
    AbstractComponent.prototype._preventAndStop = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    //*********** Draggable **********//
    AbstractComponent.prototype._onDragStart = function (event) {
        //console.log('ondragstart.dragEnabled', this._dragEnabled);
        if (this._dragEnabled) {
            this._dragDropService.allowedDropZones = this.dropZones;
            // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
            this._onDragStartCallback(event);
        }
    };
    AbstractComponent.prototype._onDragEnd = function (event) {
        this._dragDropService.allowedDropZones = [];
        // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
        this._onDragEndCallback(event);
    };
    //**** Drop Callbacks ****//
    AbstractComponent.prototype._onDragEnterCallback = function (event) { };
    AbstractComponent.prototype._onDragOverCallback = function (event) { };
    AbstractComponent.prototype._onDragLeaveCallback = function (event) { };
    AbstractComponent.prototype._onDropCallback = function (event) { };
    //**** Drag Callbacks ****//
    AbstractComponent.prototype._onDragStartCallback = function (event) { };
    AbstractComponent.prototype._onDragEndCallback = function (event) { };
    return AbstractComponent;
}());
AbstractComponent = __decorate$3([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata$2("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], DragDropService, DragDropConfig,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
], AbstractComponent);
var AbstractHandleComponent = /** @class */ (function () {
    function AbstractHandleComponent(elemRef, _dragDropService, _config, _Component, _cdr) {
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._Component = _Component;
        this._cdr = _cdr;
        this._elem = elemRef.nativeElement;
        this._Component.setDragHandle(this._elem);
    }
    return AbstractHandleComponent;
}());
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var DraggableComponent = /** @class */ (function (_super) {
    __extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drag actions happened.
         */
        _this.onDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this._defaultCursor = _this._elem.style.cursor;
        _this.dragEnabled = true;
        return _this;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DraggableComponent.prototype._onDragStartCallback = function (event) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.prototype._onDragEndCallback = function (event) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    return DraggableComponent;
}(AbstractComponent));
__decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dragEnabled"),
    __metadata$1("design:type", Boolean),
    __metadata$1("design:paramtypes", [Boolean])
], DraggableComponent.prototype, "draggable", null);
__decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], DraggableComponent.prototype, "onDragStart", void 0);
__decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], DraggableComponent.prototype, "onDragEnd", void 0);
__decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata$1("design:type", Object)
], DraggableComponent.prototype, "dragData", void 0);
__decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDragSuccess"),
    __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], DraggableComponent.prototype, "onDragSuccessCallback", void 0);
__decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropZones"),
    __metadata$1("design:type", Array),
    __metadata$1("design:paramtypes", [Array])
], DraggableComponent.prototype, "dropzones", null);
__decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectAllowed"),
    __metadata$1("design:type", String),
    __metadata$1("design:paramtypes", [String])
], DraggableComponent.prototype, "effectallowed", null);
__decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectCursor"),
    __metadata$1("design:type", String),
    __metadata$1("design:paramtypes", [String])
], DraggableComponent.prototype, "effectcursor", null);
__decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata$1("design:type", Object)
], DraggableComponent.prototype, "dragImage", void 0);
__decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata$1("design:type", Boolean)
], DraggableComponent.prototype, "cloneItem", void 0);
DraggableComponent = __decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-draggable]' }),
    __metadata$1("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], DragDropService, DragDropConfig,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
], DraggableComponent);
var DraggableHandleComponent = /** @class */ (function (_super) {
    __extends(DraggableHandleComponent, _super);
    function DraggableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    return DraggableHandleComponent;
}(AbstractHandleComponent));
DraggableHandleComponent = __decorate$2([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-draggable-handle]' }),
    __metadata$1("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], DragDropService, DragDropConfig, DraggableComponent,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
], DraggableHandleComponent);
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var DroppableComponent = /** @class */ (function (_super) {
    __extends(DroppableComponent, _super);
    function DroppableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drop action completes correctly.
         * It is activated before the on-drag-success callback.
         */
        _this.onDropSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(DroppableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
        set: function (value) {
            this.allowDrop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DroppableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    DroppableComponent.prototype._onDragOverCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDragLeaveCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDropCallback = function (event) {
        var dataTransfer = event.dataTransfer;
        if (this._dragDropService.isDragged || (dataTransfer && dataTransfer.files)) {
            this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    };
    return DroppableComponent;
}(AbstractComponent));
__decorate$4([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropEnabled"),
    __metadata$3("design:type", Boolean),
    __metadata$3("design:paramtypes", [Boolean])
], DroppableComponent.prototype, "droppable", null);
__decorate$4([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata$3("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], DroppableComponent.prototype, "onDropSuccess", void 0);
__decorate$4([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata$3("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], DroppableComponent.prototype, "onDragEnter", void 0);
__decorate$4([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata$3("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], DroppableComponent.prototype, "onDragOver", void 0);
__decorate$4([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata$3("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], DroppableComponent.prototype, "onDragLeave", void 0);
__decorate$4([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("allowDrop"),
    __metadata$3("design:type", Function),
    __metadata$3("design:paramtypes", [Function])
], DroppableComponent.prototype, "allowdrop", null);
__decorate$4([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropZones"),
    __metadata$3("design:type", Array),
    __metadata$3("design:paramtypes", [Array])
], DroppableComponent.prototype, "dropzones", null);
__decorate$4([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectAllowed"),
    __metadata$3("design:type", String),
    __metadata$3("design:paramtypes", [String])
], DroppableComponent.prototype, "effectallowed", null);
__decorate$4([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectCursor"),
    __metadata$3("design:type", String),
    __metadata$3("design:paramtypes", [String])
], DroppableComponent.prototype, "effectcursor", null);
DroppableComponent = __decorate$4([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-droppable]' }),
    __metadata$3("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], DragDropService, DragDropConfig,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
], DroppableComponent);
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var SortableContainer = /** @class */ (function (_super) {
    __extends(SortableContainer, _super);
    function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableDataService = _sortableDataService;
        _this._sortableData = [];
        _this.dragEnabled = false;
        return _this;
    }
    Object.defineProperty(SortableContainer.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "sortableData", {
        get: function () {
            return this._sortableData;
        },
        set: function (sortableData) {
            this._sortableData = sortableData;
            if (sortableData instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]) {
                this.sortableHandler = new SortableFormArrayHandler();
            }
            else {
                this.sortableHandler = new SortableArrayHandler();
            }
            //
            this.dropEnabled = !!this._sortableData;
            // console.log("collection is changed, drop enabled: " + this.dropEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableContainer.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            var item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
            // Check does element exist in sortableData of this Container
            if (this.indexOf(item) === -1) {
                // Let's add it
                // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + '] over parent node');
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                if (this._sortableDataService.sortableContainer._sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this.insertItemAt(item, 0);
                this._sortableDataService.sortableContainer = this;
                this._sortableDataService.index = 0;
            }
            // Refresh changes in properties of container component
            this.detectChanges();
        }
    };
    SortableContainer.prototype.getItemAt = function (index) {
        return this.sortableHandler.getItemAt(this._sortableData, index);
    };
    SortableContainer.prototype.indexOf = function (item) {
        return this.sortableHandler.indexOf(this._sortableData, item);
    };
    SortableContainer.prototype.removeItemAt = function (index) {
        this.sortableHandler.removeItemAt(this._sortableData, index);
    };
    SortableContainer.prototype.insertItemAt = function (item, index) {
        this.sortableHandler.insertItemAt(this._sortableData, item, index);
    };
    return SortableContainer;
}(AbstractComponent));
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dragEnabled"),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], SortableContainer.prototype, "draggable", null);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata$4("design:type", Object),
    __metadata$4("design:paramtypes", [Object])
], SortableContainer.prototype, "sortableData", null);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropZones"),
    __metadata$4("design:type", Array),
    __metadata$4("design:paramtypes", [Array])
], SortableContainer.prototype, "dropzones", null);
SortableContainer = __decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-sortable-container]' }),
    __metadata$4("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], DragDropService, DragDropConfig, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
        DragDropSortableService])
], SortableContainer);
var SortableArrayHandler = /** @class */ (function () {
    function SortableArrayHandler() {
    }
    SortableArrayHandler.prototype.getItemAt = function (sortableData, index) {
        return sortableData[index];
    };
    SortableArrayHandler.prototype.indexOf = function (sortableData, item) {
        return sortableData.indexOf(item);
    };
    SortableArrayHandler.prototype.removeItemAt = function (sortableData, index) {
        sortableData.splice(index, 1);
    };
    SortableArrayHandler.prototype.insertItemAt = function (sortableData, item, index) {
        sortableData.splice(index, 0, item);
    };
    return SortableArrayHandler;
}());
var SortableFormArrayHandler = /** @class */ (function () {
    function SortableFormArrayHandler() {
    }
    SortableFormArrayHandler.prototype.getItemAt = function (sortableData, index) {
        return sortableData.at(index);
    };
    SortableFormArrayHandler.prototype.indexOf = function (sortableData, item) {
        return sortableData.controls.indexOf(item);
    };
    SortableFormArrayHandler.prototype.removeItemAt = function (sortableData, index) {
        sortableData.removeAt(index);
    };
    SortableFormArrayHandler.prototype.insertItemAt = function (sortableData, item, index) {
        sortableData.insert(index, item);
    };
    return SortableFormArrayHandler;
}());
var SortableComponent = /** @class */ (function (_super) {
    __extends(SortableComponent, _super);
    function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableContainer = _sortableContainer;
        _this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragStartCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragOverCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragEndCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDropSuccessCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.dropZones = _this._sortableContainer.dropZones;
        _this.dragEnabled = true;
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(SortableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype._onDragStartCallback = function (event) {
        // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = true;
        this._sortableDataService.sortableContainer = this._sortableContainer;
        this._sortableDataService.index = this.index;
        this._sortableDataService.markSortable(this._elem);
        // Add dragData
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        //
        this.onDragStartCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragOverCallback = function (event) {
        if (this._sortableDataService.isDragged && this._elem !== this._sortableDataService.elem) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this._elem);
            this.onDragOverCallback.emit(this._dragDropService.dragData);
        }
    };
    SortableComponent.prototype._onDragEndCallback = function (event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            this._sortableDataService.markSortable(this._elem);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' + this._sortableDataService.index + ']');
                // Get item
                var item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                if (this._sortableDataService.sortableContainer.sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableContainer.insertItemAt(item, this.index);
                if (this._sortableContainer.dropEnabled) {
                    this._sortableContainer.dropEnabled = false;
                }
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
                this.detectChanges();
            }
        }
    };
    SortableComponent.prototype._onDropCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
            this.onDropSuccessCallback.emit(this._dragDropService.dragData);
            if (this._dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._sortableContainer.detectChanges();
        }
    };
    return SortableComponent;
}(AbstractComponent));
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('sortableIndex'),
    __metadata$4("design:type", Number)
], SortableComponent.prototype, "index", void 0);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dragEnabled"),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], SortableComponent.prototype, "draggable", null);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropEnabled"),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Boolean])
], SortableComponent.prototype, "droppable", null);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata$4("design:type", Object)
], SortableComponent.prototype, "dragData", void 0);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectAllowed"),
    __metadata$4("design:type", String),
    __metadata$4("design:paramtypes", [String])
], SortableComponent.prototype, "effectallowed", null);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectCursor"),
    __metadata$4("design:type", String),
    __metadata$4("design:paramtypes", [String])
], SortableComponent.prototype, "effectcursor", null);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDragSuccess"),
    __metadata$4("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], SortableComponent.prototype, "onDragSuccessCallback", void 0);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDragStart"),
    __metadata$4("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], SortableComponent.prototype, "onDragStartCallback", void 0);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDragOver"),
    __metadata$4("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], SortableComponent.prototype, "onDragOverCallback", void 0);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDragEnd"),
    __metadata$4("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], SortableComponent.prototype, "onDragEndCallback", void 0);
__decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDropSuccess"),
    __metadata$4("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], SortableComponent.prototype, "onDropSuccessCallback", void 0);
SortableComponent = __decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-sortable]' }),
    __metadata$4("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], DragDropService, DragDropConfig,
        SortableContainer,
        DragDropSortableService,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
], SortableComponent);
var SortableHandleComponent = /** @class */ (function (_super) {
    __extends(SortableHandleComponent, _super);
    function SortableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    return SortableHandleComponent;
}(AbstractHandleComponent));
SortableHandleComponent = __decorate$5([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-sortable-handle]' }),
    __metadata$4("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], DragDropService, DragDropConfig, SortableComponent,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
], SortableHandleComponent);
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var providers = [
    DragDropConfig,
    { provide: DragDropService, useFactory: dragDropServiceFactory },
    { provide: DragDropSortableService, useFactory: dragDropSortableServiceFactory, deps: [DragDropConfig] }
];
var DndModule = DndModule_1 = /** @class */ (function () {
    function DndModule() {
    }
    DndModule.forRoot = function () {
        return {
            ngModule: DndModule_1,
            providers: providers
        };
    };
    return DndModule;
}());
DndModule = DndModule_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent],
        exports: [DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent],
    })
], DndModule);
var DndModule_1;
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-dnd.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js ***!
  \*****************************************************************************/
/*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function() { return InfiniteScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function() { return InfiniteScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * @param {?} selector
 * @param {?} scrollWindow
 * @param {?} defaultElement
 * @param {?} fromRoot
 * @return {?}
 */
function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
    var /** @type {?} */ hasWindow = window && !!window.document && window.document.documentElement;
    var /** @type {?} */ container = hasWindow && scrollWindow ? window : defaultElement;
    if (selector) {
        var /** @type {?} */ containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString
            ? findElement(selector, defaultElement.nativeElement, fromRoot)
            : selector;
        if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
    }
    return container;
}
/**
 * @param {?} selector
 * @param {?} customRoot
 * @param {?} fromRoot
 * @return {?}
 */
function findElement(selector, customRoot, fromRoot) {
    var /** @type {?} */ rootEl = fromRoot ? window.document : customRoot;
    return rootEl.querySelector(selector);
}
/**
 * @param {?} prop
 * @return {?}
 */
function inputPropChanged(prop) {
    return prop && !prop.firstChange;
}
/**
 * @return {?}
 */
function hasWindowDefined() {
    return typeof window !== 'undefined';
}
var VerticalProps = {
    clientHeight: "clientHeight",
    offsetHeight: "offsetHeight",
    scrollHeight: "scrollHeight",
    pageYOffset: "pageYOffset",
    offsetTop: "offsetTop",
    scrollTop: "scrollTop",
    top: "top"
};
var HorizontalProps = {
    clientHeight: "clientWidth",
    offsetHeight: "offsetWidth",
    scrollHeight: "scrollWidth",
    pageYOffset: "pageXOffset",
    offsetTop: "offsetLeft",
    scrollTop: "scrollLeft",
    top: "left"
};
var AxisResolver = (function () {
    /**
     * @param {?=} vertical
     */
    function AxisResolver(vertical) {
        if (vertical === void 0) { vertical = true; }
        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
    }
    /**
     * @return {?}
     */
    AxisResolver.prototype.clientHeightKey = function () {
        return this.propsMap.clientHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetHeightKey = function () {
        return this.propsMap.offsetHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollHeightKey = function () {
        return this.propsMap.scrollHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.pageYOffsetKey = function () {
        return this.propsMap.pageYOffset;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetTopKey = function () {
        return this.propsMap.offsetTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollTopKey = function () {
        return this.propsMap.scrollTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.topKey = function () {
        return this.propsMap.top;
    };
    return AxisResolver;
}());
/**
 * @param {?} alwaysCallback
 * @param {?} shouldFireScrollEvent
 * @param {?} isTriggeredCurrentTotal
 * @return {?}
 */
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
    return (alwaysCallback || shouldFireScrollEvent) && !isTriggeredCurrentTotal;
}
/**
 * @param {?} __0
 * @return {?}
 */
function createResolver(_a) {
    var windowElement = _a.windowElement, axis = _a.axis;
    return createResolverWithContainer({ axis: axis, isWindow: isElementWindow(windowElement) }, windowElement);
}
/**
 * @param {?} resolver
 * @param {?} windowElement
 * @return {?}
 */
function createResolverWithContainer(resolver, windowElement) {
    var /** @type {?} */ container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
        ? windowElement
        : windowElement.nativeElement;
    return Object.assign({}, resolver, { container: container });
}
/**
 * @param {?} windowElement
 * @return {?}
 */
function isElementWindow(windowElement) {
    var /** @type {?} */ isWindow = ['Window', 'global'].some(function (obj) { return Object.prototype.toString.call(windowElement).includes(obj); });
    return isWindow;
}
/**
 * @param {?} isContainerWindow
 * @param {?} windowElement
 * @return {?}
 */
function getDocumentElement(isContainerWindow, windowElement) {
    return isContainerWindow ? windowElement.document.documentElement : null;
}
/**
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePoints(element, resolver) {
    var /** @type {?} */ height = extractHeightForElement(resolver);
    return resolver.isWindow
        ? calculatePointsForWindow(height, element, resolver)
        : calculatePointsForElement(height, element, resolver);
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForWindow(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container, isWindow = resolver.isWindow;
    var _a = extractHeightPropKeys(axis), offsetHeightKey = _a.offsetHeightKey, clientHeightKey = _a.clientHeightKey;
    // scrolled until now / current y point
    var /** @type {?} */ scrolled = height +
        getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
    // total height / most bottom y point
    var /** @type {?} */ nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
    var /** @type {?} */ totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
        nativeElementHeight;
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll };
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForElement(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container;
    // perhaps use container.offsetTop instead of 'scrollTop'
    var /** @type {?} */ scrolled = container[axis.scrollTopKey()];
    var /** @type {?} */ totalToScroll = container[axis.scrollHeightKey()];
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll };
}
/**
 * @param {?} axis
 * @return {?}
 */
function extractHeightPropKeys(axis) {
    return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey()
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
function extractHeightForElement(_a) {
    var container = _a.container, isWindow = _a.isWindow, axis = _a.axis;
    var _b = extractHeightPropKeys(axis), offsetHeightKey = _b.offsetHeightKey, clientHeightKey = _b.clientHeightKey;
    return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
/**
 * @param {?} elem
 * @param {?} isWindow
 * @param {?} offsetHeightKey
 * @param {?} clientHeightKey
 * @return {?}
 */
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
    if (isNaN(elem[offsetHeightKey])) {
        var /** @type {?} */ docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
    }
    else {
        return elem[offsetHeightKey];
    }
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementOffsetTop(elem, axis, isWindow) {
    var /** @type {?} */ topKey = axis.topKey();
    // elem = elem.nativeElement;
    if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
    }
    return (elem.getBoundingClientRect()[topKey] +
        getElementPageYOffset(elem, axis, isWindow));
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementPageYOffset(elem, axis, isWindow) {
    var /** @type {?} */ pageYOffset = axis.pageYOffsetKey();
    var /** @type {?} */ scrollTop = axis.scrollTopKey();
    var /** @type {?} */ offsetTop = axis.offsetTopKey();
    if (isNaN(window[pageYOffset])) {
        return getDocumentElement(isWindow, elem)[scrollTop];
    }
    else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
    }
    else {
        return elem[offsetTop];
    }
}
/**
 * @param {?} container
 * @param {?} distance
 * @param {?} scrollingDown
 * @return {?}
 */
function shouldFireScrollEvent(container, distance, scrollingDown) {
    var /** @type {?} */ remaining;
    var /** @type {?} */ containerBreakpoint;
    var /** @type {?} */ scrolledUntilNow = container.height + container.scrolled;
    if (scrollingDown) {
        remaining = (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        containerBreakpoint = distance.down / 10;
    }
    else {
        remaining = scrolledUntilNow / container.totalToScroll;
        containerBreakpoint = distance.up / 10;
    }
    var /** @type {?} */ shouldFireEvent = remaining <= containerBreakpoint;
    return shouldFireEvent;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @return {?}
 */
function isScrollingDownwards(lastScrollPosition, container) {
    return lastScrollPosition < container.scrolled;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @param {?} distance
 * @return {?}
 */
function getScrollStats(lastScrollPosition, container, distance) {
    var /** @type {?} */ scrollDown = isScrollingDownwards(lastScrollPosition, container);
    return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown: scrollDown
    };
}
/**
 * @param {?} position
 * @param {?} scrollState
 * @return {?}
 */
function updateScrollPosition(position, scrollState) {
    return (scrollState.lastScrollPosition = position);
}
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @return {?}
 */
function updateTotalToScroll(totalToScroll, scrollState) {
    if (scrollState.lastTotalToScroll !== totalToScroll) {
        scrollState.lastTotalToScroll = scrollState.totalToScroll;
        scrollState.totalToScroll = totalToScroll;
    }
}
/**
 * @param {?} scrollState
 * @return {?}
 */
/**
 * @param {?} scroll
 * @param {?} scrollState
 * @param {?} triggered
 * @param {?} isScrollingDown
 * @return {?}
 */
function updateTriggeredFlag(scroll, scrollState, triggered, isScrollingDown) {
    if (isScrollingDown) {
        scrollState.triggered.down = scroll;
    }
    else {
        scrollState.triggered.up = scroll;
    }
}
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @param {?} isScrollingDown
 * @return {?}
 */
function isTriggeredScroll(totalToScroll, scrollState, isScrollingDown) {
    return isScrollingDown
        ? scrollState.triggered.down === totalToScroll
        : scrollState.triggered.up === totalToScroll;
}
/**
 * @param {?} scrollState
 * @param {?} scrolledUntilNow
 * @param {?} totalToScroll
 * @return {?}
 */
function updateScrollState(scrollState, scrolledUntilNow, totalToScroll) {
    updateScrollPosition(scrolledUntilNow, scrollState);
    updateTotalToScroll(totalToScroll, scrollState);
    // const isSameTotal = isSameTotalToScroll(scrollState);
    // if (!isSameTotal) {
    //   updateTriggeredFlag(scrollState, false, isScrollingDown);
    // }
}
/**
 * @param {?} config
 * @return {?}
 */
function createScroller(config) {
    var scrollContainer = config.scrollContainer, scrollWindow = config.scrollWindow, element = config.element, fromRoot = config.fromRoot;
    var /** @type {?} */ resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
    });
    var startWithTotal = calculatePoints(element, resolver).totalToScroll;
    var /** @type {?} */ scrollState = {
        lastScrollPosition: 0,
        lastTotalToScroll: 0,
        totalToScroll: startWithTotal,
        triggered: {
            down: 0,
            up: 0
        }
    };
    var /** @type {?} */ options = {
        container: resolver.container,
        throttle: config.throttle
    };
    var /** @type {?} */ distance = {
        up: config.upDistance,
        down: config.downDistance
    };
    return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (ev) { return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (positionStats) { return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_a) {
        var stats = _a.stats, scrollDown = _a.scrollDown;
        return updateScrollState(scrollState, stats.scrolled, stats.totalToScroll);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
        var fire = _a.fire, scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        return shouldTriggerEvents(config.alwaysCallback, fire, isTriggeredScroll(totalToScroll, scrollState, scrollDown));
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_a) {
        var scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        updateTriggeredFlag(totalToScroll, scrollState, true, scrollDown);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(toInfiniteScrollAction));
}
/**
 * @param {?} options
 * @return {?}
 */
function attachScrollEvent(options) {
    var /** @type {?} */ obs = Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(options.container, "scroll");
    // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
    // Let's avoid calling the function unless needed.
    // See https://github.com/orizens/ngx-infinite-scroll/issues/198
    if (options.throttle) {
        obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sampleTime"])(options.throttle));
    }
    return obs;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} stats
 * @param {?} distance
 * @return {?}
 */
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
    var _a = getScrollStats(lastScrollPosition, stats, distance), scrollDown = _a.scrollDown, fire = _a.fire;
    return {
        scrollDown: scrollDown,
        fire: fire,
        stats: stats
    };
}
var InfiniteScrollActions = {
    DOWN: "[NGX_ISE] DOWN",
    UP: "[NGX_ISE] UP"
};
/**
 * @param {?} response
 * @return {?}
 */
function toInfiniteScrollAction(response) {
    var scrollDown = response.scrollDown, currentScrollPosition = response.stats.scrolled;
    return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
            currentScrollPosition: currentScrollPosition
        }
    };
}
var InfiniteScrollDirective = (function () {
    /**
     * @param {?} element
     * @param {?} zone
     */
    function InfiniteScrollDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
    }
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngAfterViewInit = function () {
        if (!this.infiniteScrollDisabled) {
            this.setup();
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnChanges = function (_a) {
        var infiniteScrollContainer = _a.infiniteScrollContainer, infiniteScrollDisabled = _a.infiniteScrollDisabled, infiniteScrollDistance = _a.infiniteScrollDistance;
        var /** @type {?} */ containerChanged = inputPropChanged(infiniteScrollContainer);
        var /** @type {?} */ disabledChanged = inputPropChanged(infiniteScrollDisabled);
        var /** @type {?} */ distanceChanged = inputPropChanged(infiniteScrollDistance);
        var /** @type {?} */ shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
            (disabledChanged && !infiniteScrollDisabled.currentValue) || distanceChanged;
        if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();
            if (shouldSetup) {
                this.setup();
            }
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.setup = function () {
        var _this = this;
        if (hasWindowDefined()) {
            this.zone.runOutsideAngular(function () {
                _this.disposeScroller = createScroller({
                    fromRoot: _this.fromRoot,
                    alwaysCallback: _this.alwaysCallback,
                    disable: _this.infiniteScrollDisabled,
                    downDistance: _this.infiniteScrollDistance,
                    element: _this.element,
                    horizontal: _this.horizontal,
                    scrollContainer: _this.infiniteScrollContainer,
                    scrollWindow: _this.scrollWindow,
                    throttle: _this.infiniteScrollThrottle,
                    upDistance: _this.infiniteScrollUpDistance
                }).subscribe(function (payload) { return _this.zone.run(function () { return _this.handleOnScroll(payload); }); });
            });
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.handleOnScroll = function (_a) {
        var type = _a.type, payload = _a.payload;
        switch (type) {
            case InfiniteScrollActions.DOWN:
                return this.scrolled.emit(payload);
            case InfiniteScrollActions.UP:
                return this.scrolledUp.emit(payload);
            default:
                return;
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnDestroy = function () {
        this.destroyScroller();
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.destroyScroller = function () {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    };
    return InfiniteScrollDirective;
}());
InfiniteScrollDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
            },] },
];
/**
 * @nocollapse
 */
InfiniteScrollDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
InfiniteScrollDirective.propDecorators = {
    'scrolled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'scrolledUp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'infiniteScrollDistance': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'infiniteScrollUpDistance': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'infiniteScrollThrottle': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'infiniteScrollDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'infiniteScrollContainer': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'scrollWindow': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'immediateCheck': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'horizontal': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'alwaysCallback': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fromRoot': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
var InfiniteScrollModule = (function () {
    function InfiniteScrollModule() {
    }
    return InfiniteScrollModule;
}());
InfiniteScrollModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [InfiniteScrollDirective],
                exports: [InfiniteScrollDirective],
                imports: [],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
InfiniteScrollModule.ctorParameters = function () { return []; };
/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-library-starter
 */
/**
 * Entry point for all public APIs of the package.
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-infinite-scroll.es5.js.map


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/of.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/of.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].of = rxjs__WEBPACK_IMPORTED_MODULE_0__["of"];
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/fromEvent.js ***!
  \****************************************************************/
/*! exports provided: fromEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"]; });


//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/of.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/of.js ***!
  \*********************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"]; });


//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/sweetalert/lib/modules/default-params.js":
/*!***************************************************************!*\
  !*** ./node_modules/sweetalert/lib/modules/default-params.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var defaultParams = {
  title: '',
  text: '',
  type: null,
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnConfirm: true,
  closeOnCancel: true,
  confirmButtonText: 'OK',
  confirmButtonColor: '#8CD4F5',
  cancelButtonText: 'Cancel',
  imageUrl: null,
  imageSize: null,
  timer: null,
  customClass: '',
  html: false,
  animation: true,
  allowEscapeKey: true,
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  showLoaderOnConfirm: false
};

exports['default'] = defaultParams;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/sweetalert/lib/modules/handle-click.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert/lib/modules/handle-click.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _colorLuminance = __webpack_require__(/*! ./utils */ "./node_modules/sweetalert/lib/modules/utils.js");

var _getModal = __webpack_require__(/*! ./handle-swal-dom */ "./node_modules/sweetalert/lib/modules/handle-swal-dom.js");

var _hasClass$isDescendant = __webpack_require__(/*! ./handle-dom */ "./node_modules/sweetalert/lib/modules/handle-dom.js");

/*
 * User clicked on "Confirm"/"OK" or "Cancel"
 */
var handleButton = function handleButton(event, params, modal) {
  var e = event || window.event;
  var target = e.target || e.srcElement;

  var targetedConfirm = target.className.indexOf('confirm') !== -1;
  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

  // Since the user can change the background-color of the confirm button programmatically,
  // we must calculate what the color should be on hover/active
  var normalColor, hoverColor, activeColor;
  if (targetedConfirm && params.confirmButtonColor) {
    normalColor = params.confirmButtonColor;
    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
  }

  function shouldSetConfirmButtonColor(color) {
    if (targetedConfirm && params.confirmButtonColor) {
      target.style.backgroundColor = color;
    }
  }

  switch (e.type) {
    case 'mouseover':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'mouseout':
      shouldSetConfirmButtonColor(normalColor);
      break;

    case 'mousedown':
      shouldSetConfirmButtonColor(activeColor);
      break;

    case 'mouseup':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'focus':
      var $confirmButton = modal.querySelector('button.confirm');
      var $cancelButton = modal.querySelector('button.cancel');

      if (targetedConfirm) {
        $cancelButton.style.boxShadow = 'none';
      } else {
        $confirmButton.style.boxShadow = 'none';
      }
      break;

    case 'click':
      var clickedOnModal = modal === target;
      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

      // Ignore click outside if allowOutsideClick is false
      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
        break;
      }

      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
        handleConfirm(modal, params);
      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
        handleCancel(modal, params);
      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
        sweetAlert.close();
      }
      break;
  }
};

/*
 *  User clicked on "Confirm"/"OK"
 */
var handleConfirm = function handleConfirm(modal, params) {
  var callbackValue = true;

  if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
    callbackValue = modal.querySelector('input').value;

    if (!callbackValue) {
      callbackValue = '';
    }
  }

  params.doneFunction(callbackValue);

  if (params.closeOnConfirm) {
    sweetAlert.close();
  }
  // Disable cancel and confirm button if the parameter is true
  if (params.showLoaderOnConfirm) {
    sweetAlert.disableButtons();
  }
};

/*
 *  User clicked on "Cancel"
 */
var handleCancel = function handleCancel(modal, params) {
  // Check if callback function expects a parameter (to track cancel actions)
  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

  if (functionHandlesCancel) {
    params.doneFunction(false);
  }

  if (params.closeOnCancel) {
    sweetAlert.close();
  }
};

exports['default'] = {
  handleButton: handleButton,
  handleConfirm: handleConfirm,
  handleCancel: handleCancel
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/sweetalert/lib/modules/handle-dom.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert/lib/modules/handle-dom.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

var addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

var removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

var escapeHtml = function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var _show = function _show(elem) {
  elem.style.opacity = '';
  elem.style.display = 'block';
};

var show = function show(elems) {
  if (elems && !elems.length) {
    return _show(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _show(elems[i]);
  }
};

var _hide = function _hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var hide = function hide(elems) {
  if (elems && !elems.length) {
    return _hide(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _hide(elems[i]);
  }
};

var isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

var getTopMargin = function getTopMargin(elem) {
  elem.style.left = '-9999px';
  elem.style.display = 'block';

  var height = elem.clientHeight,
      padding;
  if (typeof getComputedStyle !== 'undefined') {
    // IE 8
    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
  } else {
    padding = parseInt(elem.currentStyle.padding);
  }

  elem.style.left = '';
  elem.style.display = 'none';
  return '-' + parseInt((height + padding) / 2) + 'px';
};

var fadeIn = function fadeIn(elem, interval) {
  if (+elem.style.opacity < 1) {
    interval = interval || 16;
    elem.style.opacity = 0;
    elem.style.display = 'block';
    var last = +new Date();
    var tick = (function (_tick) {
      function tick() {
        return _tick.apply(this, arguments);
      }

      tick.toString = function () {
        return _tick.toString();
      };

      return tick;
    })(function () {
      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
      last = +new Date();

      if (+elem.style.opacity < 1) {
        setTimeout(tick, interval);
      }
    });
    tick();
  }
  elem.style.display = 'block'; //fallback IE8
};

var fadeOut = function fadeOut(elem, interval) {
  interval = interval || 16;
  elem.style.opacity = 1;
  var last = +new Date();
  var tick = (function (_tick2) {
    function tick() {
      return _tick2.apply(this, arguments);
    }

    tick.toString = function () {
      return _tick2.toString();
    };

    return tick;
  })(function () {
    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
    last = +new Date();

    if (+elem.style.opacity > 0) {
      setTimeout(tick, interval);
    } else {
      elem.style.display = 'none';
    }
  });
  tick();
};

var fireClick = function fireClick(node) {
  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
  // Then fixed for today's Chrome browser.
  if (typeof MouseEvent === 'function') {
    // Up-to-date approach
    var mevt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    node.dispatchEvent(mevt);
  } else if (document.createEvent) {
    // Fallback
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

var stopEventPropagation = function stopEventPropagation(e) {
  // In particular, make sure the space bar doesn't scroll the main window.
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
    e.preventDefault();
  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
    window.event.cancelBubble = true;
  }
};

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.escapeHtml = escapeHtml;
exports._show = _show;
exports.show = show;
exports._hide = _hide;
exports.hide = hide;
exports.isDescendant = isDescendant;
exports.getTopMargin = getTopMargin;
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
exports.fireClick = fireClick;
exports.stopEventPropagation = stopEventPropagation;

/***/ }),

/***/ "./node_modules/sweetalert/lib/modules/handle-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert/lib/modules/handle-key.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stopEventPropagation$fireClick = __webpack_require__(/*! ./handle-dom */ "./node_modules/sweetalert/lib/modules/handle-dom.js");

var _setFocusStyle = __webpack_require__(/*! ./handle-swal-dom */ "./node_modules/sweetalert/lib/modules/handle-swal-dom.js");

var handleKeyDown = function handleKeyDown(event, params, modal) {
  var e = event || window.event;
  var keyCode = e.keyCode || e.which;

  var $okButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  var $modalButtons = modal.querySelectorAll('button[tabindex]');

  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
    // Don't do work on keys we don't care about.
    return;
  }

  var $targetElement = e.target || e.srcElement;

  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
  for (var i = 0; i < $modalButtons.length; i++) {
    if ($targetElement === $modalButtons[i]) {
      btnIndex = i;
      break;
    }
  }

  if (keyCode === 9) {
    // TAB
    if (btnIndex === -1) {
      // No button focused. Jump to the confirm button.
      $targetElement = $okButton;
    } else {
      // Cycle to the next button
      if (btnIndex === $modalButtons.length - 1) {
        $targetElement = $modalButtons[0];
      } else {
        $targetElement = $modalButtons[btnIndex + 1];
      }
    }

    _stopEventPropagation$fireClick.stopEventPropagation(e);
    $targetElement.focus();

    if (params.confirmButtonColor) {
      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
    }
  } else {
    if (keyCode === 13) {
      if ($targetElement.tagName === 'INPUT') {
        $targetElement = $okButton;
        $okButton.focus();
      }

      if (btnIndex === -1) {
        // ENTER/SPACE clicked outside of a button.
        $targetElement = $okButton;
      } else {
        // Do nothing - let the browser handle it.
        $targetElement = undefined;
      }
    } else if (keyCode === 27 && params.allowEscapeKey === true) {
      $targetElement = $cancelButton;
      _stopEventPropagation$fireClick.fireClick($targetElement, e);
    } else {
      // Fallback - let the browser handle it.
      $targetElement = undefined;
    }
  }
};

exports['default'] = handleKeyDown;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/sweetalert/lib/modules/handle-swal-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/sweetalert/lib/modules/handle-swal-dom.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexToRgb = __webpack_require__(/*! ./utils */ "./node_modules/sweetalert/lib/modules/utils.js");

var _removeClass$getTopMargin$fadeIn$show$addClass = __webpack_require__(/*! ./handle-dom */ "./node_modules/sweetalert/lib/modules/handle-dom.js");

var _defaultParams = __webpack_require__(/*! ./default-params */ "./node_modules/sweetalert/lib/modules/default-params.js");

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

/*
 * Add modal + overlay to DOM
 */

var _injectedHTML = __webpack_require__(/*! ./injected-html */ "./node_modules/sweetalert/lib/modules/injected-html.js");

var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

var modalClass = '.sweet-alert';
var overlayClass = '.sweet-overlay';

var sweetAlertInitialize = function sweetAlertInitialize() {
  var sweetWrap = document.createElement('div');
  sweetWrap.innerHTML = _injectedHTML2['default'];

  // Append elements to body
  while (sweetWrap.firstChild) {
    document.body.appendChild(sweetWrap.firstChild);
  }
};

/*
 * Get DOM element of modal
 */
var getModal = (function (_getModal) {
  function getModal() {
    return _getModal.apply(this, arguments);
  }

  getModal.toString = function () {
    return _getModal.toString();
  };

  return getModal;
})(function () {
  var $modal = document.querySelector(modalClass);

  if (!$modal) {
    sweetAlertInitialize();
    $modal = getModal();
  }

  return $modal;
});

/*
 * Get DOM element of input (in modal)
 */
var getInput = function getInput() {
  var $modal = getModal();
  if ($modal) {
    return $modal.querySelector('input');
  }
};

/*
 * Get DOM element of overlay
 */
var getOverlay = function getOverlay() {
  return document.querySelector(overlayClass);
};

/*
 * Add box-shadow style to button (depending on its chosen bg-color)
 */
var setFocusStyle = function setFocusStyle($button, bgColor) {
  var rgbColor = _hexToRgb.hexToRgb(bgColor);
  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
};

/*
 * Animation when opening modal
 */
var openModal = function openModal(callback) {
  var $modal = getModal();
  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');

  window.previousActiveElement = document.activeElement;
  var $okButton = $modal.querySelector('button.confirm');
  $okButton.focus();

  setTimeout(function () {
    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
  }, 500);

  var timer = $modal.getAttribute('data-timer');

  if (timer !== 'null' && timer !== '') {
    var timerCallback = callback;
    $modal.timeout = setTimeout(function () {
      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
      if (doneFunctionExists) {
        timerCallback(null);
      } else {
        sweetAlert.close();
      }
    }, timer);
  }
};

/*
 * Reset the styling of the input
 * (for example if errors have been shown)
 */
var resetInput = function resetInput() {
  var $modal = getModal();
  var $input = getInput();

  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
  $input.value = _defaultParams2['default'].inputValue;
  $input.setAttribute('type', _defaultParams2['default'].inputType);
  $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);

  resetInputError();
};

var resetInputError = function resetInputError(event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
};

/*
 * Set "margin-top"-property on modal based on its computed height
 */
var fixVerticalPosition = function fixVerticalPosition() {
  var $modal = getModal();
  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
};

exports.sweetAlertInitialize = sweetAlertInitialize;
exports.getModal = getModal;
exports.getOverlay = getOverlay;
exports.getInput = getInput;
exports.setFocusStyle = setFocusStyle;
exports.openModal = openModal;
exports.resetInput = resetInput;
exports.resetInputError = resetInputError;
exports.fixVerticalPosition = fixVerticalPosition;

/***/ }),

/***/ "./node_modules/sweetalert/lib/modules/injected-html.js":
/*!**************************************************************!*\
  !*** ./node_modules/sweetalert/lib/modules/injected-html.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var injectedHTML =

// Dark overlay
"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

// Modal
"<div class=\"sweet-alert\">" +

// Error icon
"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

// Warning icon
"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

// Info icon
"<div class=\"sa-icon sa-info\"></div>" +

// Success icon
"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

// Title, text and input
"<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" +

// Input errors
"<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +

// Cancel and confirm buttons
"<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +

// Loading animation
"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

// End of modal
"</div>";

exports["default"] = injectedHTML;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/sweetalert/lib/modules/set-params.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert/lib/modules/set-params.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isIE8 = __webpack_require__(/*! ./utils */ "./node_modules/sweetalert/lib/modules/utils.js");

var _getModal$getInput$setFocusStyle = __webpack_require__(/*! ./handle-swal-dom */ "./node_modules/sweetalert/lib/modules/handle-swal-dom.js");

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = __webpack_require__(/*! ./handle-dom */ "./node_modules/sweetalert/lib/modules/handle-dom.js");

var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  var modal = _getModal$getInput$setFocusStyle.getModal();

  var $title = modal.querySelector('h2');
  var $text = modal.querySelector('p');
  var $cancelBtn = modal.querySelector('button.cancel');
  var $confirmBtn = modal.querySelector('button.confirm');

  /*
   * Title
   */
  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

  /*
   * Text
   */
  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

  /*
   * Custom class
   */
  if (params.customClass) {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
    modal.setAttribute('data-custom-class', params.customClass);
  } else {
    // Find previously set classes and remove them
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
    modal.setAttribute('data-custom-class', '');
  }

  /*
   * Icon
   */
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));

  if (params.type && !_isIE8.isIE8()) {
    var _ret = (function () {

      var validType = false;

      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }

      if (!validType) {
        logStr('Unknown alert type: ' + params.type);
        return {
          v: false
        };
      }

      var typesWithIcons = ['success', 'error', 'warning', 'info'];
      var $icon = undefined;

      if (typesWithIcons.indexOf(params.type) !== -1) {
        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
      }

      var $input = _getModal$getInput$setFocusStyle.getInput();

      // Animate icon
      switch (params.type) {

        case 'success':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
          break;

        case 'error':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
          break;

        case 'warning':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
          break;

        case 'input':
        case 'prompt':
          $input.setAttribute('type', params.inputType);
          $input.value = params.inputValue;
          $input.setAttribute('placeholder', params.inputPlaceholder);
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
          setTimeout(function () {
            $input.focus();
            $input.addEventListener('keyup', swal.resetInputError);
          }, 400);
          break;
      }
    })();

    if (typeof _ret === 'object') {
      return _ret.v;
    }
  }

  /*
   * Custom image
   */
  if (params.imageUrl) {
    var $customIcon = modal.querySelector('.sa-icon.sa-custom');

    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

    var _imgWidth = 80;
    var _imgHeight = 80;

    if (params.imageSize) {
      var dimensions = params.imageSize.toString().split('x');
      var imgWidth = dimensions[0];
      var imgHeight = dimensions[1];

      if (!imgWidth || !imgHeight) {
        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
      } else {
        _imgWidth = imgWidth;
        _imgHeight = imgHeight;
      }
    }

    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
  }

  /*
   * Show cancel button?
   */
  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
  if (params.showCancelButton) {
    $cancelBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
  }

  /*
   * Show confirm button?
   */
  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
  if (params.showConfirmButton) {
    $confirmBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
  }

  /*
   * Custom text on cancel/confirm buttons
   */
  if (params.cancelButtonText) {
    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
  }
  if (params.confirmButtonText) {
    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
  }

  /*
   * Custom color on confirm button
   */
  if (params.confirmButtonColor) {
    // Set confirm button to selected background color
    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

    // Set the confirm button color to the loading ring
    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

    // Set box-shadow to default focused button
    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
  }

  /*
   * Allow outside click
   */
  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

  /*
   * Callback function
   */
  var hasDoneFunction = params.doneFunction ? true : false;
  modal.setAttribute('data-has-done-function', hasDoneFunction);

  /*
   * Animation
   */
  if (!params.animation) {
    modal.setAttribute('data-animation', 'none');
  } else if (typeof params.animation === 'string') {
    modal.setAttribute('data-animation', params.animation); // Custom animation
  } else {
    modal.setAttribute('data-animation', 'pop');
  }

  /*
   * Timer
   */
  modal.setAttribute('data-timer', params.timer);
};

exports['default'] = setParameters;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/sweetalert/lib/modules/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert/lib/modules/utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
/*
 * Allow user to pass their own params
 */
var extend = function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/*
 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
 */
var hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
};

/*
 * Check if the user is using Internet Explorer 8 (for fallbacks)
 */
var isIE8 = function isIE8() {
  return window.attachEvent && !window.addEventListener;
};

/*
 * IE compatible logging for developers
 */
var logStr = function logStr(string) {
  if (window.console) {
    // IE...
    window.console.log('SweetAlert: ' + string);
  }
};

/*
 * Set hover, active and focus-states for buttons 
 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  var c;
  var i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

exports.extend = extend;
exports.hexToRgb = hexToRgb;
exports.isIE8 = isIE8;
exports.logStr = logStr;
exports.colorLuminance = colorLuminance;

/***/ }),

/***/ "./node_modules/sweetalert/lib/sweetalert.js":
/*!***************************************************!*\
  !*** ./node_modules/sweetalert/lib/sweetalert.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
// SweetAlert
// 2014-2015 (c) - Tristan Edwards
// github.com/t4t5/sweetalert

/*
 * jQuery-like functions for manipulating the DOM
 */

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = __webpack_require__(/*! ./modules/handle-dom */ "./node_modules/sweetalert/lib/modules/handle-dom.js");

/*
 * Handy utilities
 */

var _extend$hexToRgb$isIE8$logStr$colorLuminance = __webpack_require__(/*! ./modules/utils */ "./node_modules/sweetalert/lib/modules/utils.js");

/*
 *  Handle sweetAlert's DOM elements
 */

var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = __webpack_require__(/*! ./modules/handle-swal-dom */ "./node_modules/sweetalert/lib/modules/handle-swal-dom.js");

// Handle button events and keyboard events

var _handleButton$handleConfirm$handleCancel = __webpack_require__(/*! ./modules/handle-click */ "./node_modules/sweetalert/lib/modules/handle-click.js");

var _handleKeyDown = __webpack_require__(/*! ./modules/handle-key */ "./node_modules/sweetalert/lib/modules/handle-key.js");

var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

// Default values

var _defaultParams = __webpack_require__(/*! ./modules/default-params */ "./node_modules/sweetalert/lib/modules/default-params.js");

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

var _setParameters = __webpack_require__(/*! ./modules/set-params */ "./node_modules/sweetalert/lib/modules/set-params.js");

var _setParameters2 = _interopRequireWildcard(_setParameters);

/*
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * (We also use window.previousActiveElement as a global variable)
 */
var previousWindowKeyDown;
var lastFocusedButton;

/*
 * Global sweetAlert function
 * (this is what the user calls)
 */
var sweetAlert, swal;

exports['default'] = sweetAlert = swal = function () {
  var customizations = arguments[0];

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();

  /*
   * Use argument if defined or default value from params object otherwise.
   * Supports the case where a default value is boolean true and should be
   * overridden by a corresponding explicit argument which is boolean false.
   */
  function argumentOrDefault(key) {
    var args = customizations;
    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
  }

  if (customizations === undefined) {
    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
    return false;
  }

  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);

  switch (typeof customizations) {

    // Ex: swal("Hello", "Just testing", "info");
    case 'string':
      params.title = customizations;
      params.text = arguments[1] || '';
      params.type = arguments[2] || '';
      break;

    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
    case 'object':
      if (customizations.title === undefined) {
        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
        return false;
      }

      params.title = customizations.title;

      for (var customName in _defaultParams2['default']) {
        params[customName] = argumentOrDefault(customName);
      }

      // Show "Confirm" instead of "OK" if cancel button is visible
      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
      params.confirmButtonText = argumentOrDefault('confirmButtonText');

      // Callback function when clicking on "OK"/"Cancel"
      params.doneFunction = arguments[1] || null;

      break;

    default:
      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
      return false;

  }

  _setParameters2['default'](params);
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);

  // Modal interactions
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  /*
   * Make sure all modal buttons respond to all events
   */
  var $buttons = modal.querySelectorAll('button');
  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
  var onButtonEvent = function onButtonEvent(e) {
    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
  };

  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
      var btnEvt = buttonEvents[evtIndex];
      $buttons[btnIndex][btnEvt] = onButtonEvent;
    }
  }

  // Clicking outside the modal dismisses it (if allowed by user)
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

  previousWindowKeyDown = window.onkeydown;

  var onKeyEvent = function onKeyEvent(e) {
    return _handleKeyDown2['default'](e, params, modal);
  };
  window.onkeydown = onKeyEvent;

  window.onfocus = function () {
    // When the user has focused away and focused back from the whole window.
    setTimeout(function () {
      // Put in a timeout to jump out of the event sequence.
      // Calling focus() in the event sequence confuses things.
      if (lastFocusedButton !== undefined) {
        lastFocusedButton.focus();
        lastFocusedButton = undefined;
      }
    }, 0);
  };

  // Show alert with enabled buttons always
  swal.enableButtons();
};

/*
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = swal.setDefaults = function (userParams) {
  if (!userParams) {
    throw new Error('userParams is required');
  }
  if (typeof userParams !== 'object') {
    throw new Error('userParams has to be a object');
  }

  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
};

/*
 * Animation when closing modal
 */
sweetAlert.close = swal.close = function () {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');

  /*
   * Reset icon animations
   */
  var $successIcon = modal.querySelector('.sa-icon.sa-success');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

  // Reset custom class (delay so that UI changes aren't visible)
  setTimeout(function () {
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
  }, 300);

  // Make page scrollable again
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');

  // Reset the page to its previous state
  window.onkeydown = previousWindowKeyDown;
  if (window.previousActiveElement) {
    window.previousActiveElement.focus();
  }
  lastFocusedButton = undefined;
  clearTimeout(modal.timeout);

  return true;
};

/*
 * Validation of the input field is done by user
 * If something is wrong => call showInputError with errorMessage
 */
sweetAlert.showInputError = swal.showInputError = function (errorMessage) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

  var $errorContainer = modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

  $errorContainer.querySelector('p').innerHTML = errorMessage;

  setTimeout(function () {
    sweetAlert.enableButtons();
  }, 1);

  modal.querySelector('input').focus();
};

/*
 * Reset input error DOM elements
 */
sweetAlert.resetInputError = swal.resetInputError = function (event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
};

/*
 * Disable confirm and cancel buttons
 */
sweetAlert.disableButtons = swal.disableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = true;
  $cancelButton.disabled = true;
};

/*
 * Enable confirm and cancel buttons
 */
sweetAlert.enableButtons = swal.enableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = false;
  $cancelButton.disabled = false;
};

if (typeof window !== 'undefined') {
  // The 'handle-click' module requires
  // that 'sweetAlert' was set as global.
  window.sweetAlert = window.swal = sweetAlert;
} else {
  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/app/routes/elements/buttons/buttons.component.html":
/*!****************************************************************!*\
  !*** ./src/app/routes/elements/buttons/buttons.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Buttons</div>\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Button colors</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <button class=\"mb-sm btn btn-default\" type=\"button\">Default</button>\r\n                <button class=\"mb-sm btn btn-primary\" type=\"button\">Primary</button>\r\n                <button class=\"mb-sm btn btn-success\" type=\"button\">Success</button>\r\n                <button class=\"mb-sm btn btn-info\" type=\"button\">Info</button>\r\n                <button class=\"mb-sm btn btn-warning\" type=\"button\">Warning</button>\r\n                <button class=\"mb-sm btn btn-danger\" type=\"button\">Danger</button>\r\n                <button class=\"mb-sm btn btn-inverse\" type=\"button\">Inverse</button>\r\n                <button class=\"mb-sm btn btn-green\" type=\"button\">Green</button>\r\n                <button class=\"mb-sm btn btn-purple\" type=\"button\">Purple</button>\r\n                <button class=\"mb-sm btn btn-pink\" type=\"button\">Pink</button>\r\n                <br/>\r\n                <br/><a class=\"btn btn-link\" href=\"#\">Button Link</a>\r\n                <button class=\"btn btn-default\" type=\"button\">\r\n                    <strong>button tag</strong>\r\n                </button>\r\n                <a class=\"btn btn-default\" href=\"#\">\r\n                    <strong>anchor tag</strong>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Button Labeled</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <!-- Success button with label-->\r\n                <button class=\"btn btn-labeled btn-success\" type=\"button\">\r\n                    <span class=\"btn-label\"><i class=\"fa fa-check\"></i>\r\n               </span>Success</button>\r\n                <!-- Danger button with label-->\r\n                <button class=\"btn btn-labeled btn-danger\" type=\"button\">\r\n                    <span class=\"btn-label\"><i class=\"fa fa-times\"></i>\r\n               </span>Danger</button>\r\n                <!-- Info button with label-->\r\n                <button class=\"btn btn-labeled btn-info\" type=\"button\">\r\n                    <span class=\"btn-label\"><i class=\"fa fa-exclamation\"></i>\r\n               </span>Info</button>\r\n                <!-- Warning button with label-->\r\n                <button class=\"btn btn-labeled btn-warning\" type=\"button\">\r\n                    <span class=\"btn-label\"><i class=\"fa fa-warning\"></i>\r\n               </span>Warning</button>\r\n                <br/>\r\n                <br/>\r\n                <!-- Standard button with label-->\r\n                <button class=\"btn btn-labeled btn-default\" type=\"button\">\r\n                    <span class=\"btn-label\"><i class=\"fa fa-arrow-left\"></i>\r\n               </span>Left</button>\r\n                <!-- Standard button with label on the right side-->\r\n                <button class=\"btn btn-labeled btn-default\" type=\"button\">Right\r\n                    <span class=\"btn-label btn-label-right\"><i class=\"fa fa-arrow-right\"></i>\r\n               </span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Button sizing</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6\">\r\n                        <p>\r\n                            <button class=\"btn btn-primary btn-lg\" type=\"button\">Large button</button>\r\n                            <button class=\"btn btn-default btn-lg\" type=\"button\">Large button</button>\r\n                        </p>\r\n                        <p>\r\n                            <button class=\"btn btn-primary\" type=\"button\">Default button</button>\r\n                            <button class=\"btn btn-default\" type=\"button\">Default button</button>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <p>\r\n                            <button class=\"btn btn-primary btn-sm\" type=\"button\">Small button</button>\r\n                            <button class=\"btn btn-default btn-sm\" type=\"button\">Small button</button>\r\n                        </p>\r\n                        <p>\r\n                            <button class=\"btn btn-primary btn-xs\" type=\"button\">Extra small button</button>\r\n                            <button class=\"btn btn-default btn-xs\" type=\"button\">Extra small button</button>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Button group</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p></p>\r\n                <div class=\"btn-group\">\r\n                    <button class=\"btn btn-default\" type=\"button\">Left</button>\r\n                    <button class=\"btn btn-default\" type=\"button\">Middle</button>\r\n                    <button class=\"btn btn-default\" type=\"button\">Right</button>\r\n                </div>\r\n                <p></p>\r\n                <p></p>\r\n                <div class=\"btn-group\">\r\n                    <button class=\"btn btn-default\" type=\"button\">1</button>\r\n                    <button class=\"btn btn-default\" type=\"button\">2</button>\r\n                    <button class=\"btn btn-default\" type=\"button\">3</button>\r\n                    <button class=\"btn btn-default\" type=\"button\">4</button>\r\n                </div>\r\n                <div class=\"btn-group\">\r\n                    <button class=\"btn btn-default\" type=\"button\">5</button>\r\n                    <button class=\"btn btn-default\" type=\"button\">6</button>\r\n                    <button class=\"btn btn-default\" type=\"button\">7</button>\r\n                </div>\r\n                <div class=\"btn-group\">\r\n                    <button class=\"btn btn-default\" type=\"button\">8</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START panel-->\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">Outline Buttons</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <button class=\"mb-sm btn btn-default btn-outline\" type=\"button\">Default</button>\r\n        <button class=\"mb-sm btn btn-primary btn-outline\" type=\"button\">Primary</button>\r\n        <button class=\"mb-sm btn btn-success btn-outline\" type=\"button\">Success</button>\r\n        <button class=\"mb-sm btn btn-info btn-outline\" type=\"button\">Info</button>\r\n        <button class=\"mb-sm btn btn-warning btn-outline\" type=\"button\">Warning</button>\r\n        <button class=\"mb-sm btn btn-danger btn-outline\" type=\"button\">Danger</button>\r\n        <button class=\"mb-sm btn btn-inverse btn-outline\" type=\"button\">Inverse</button>\r\n        <button class=\"mb-sm btn btn-green btn-outline\" type=\"button\">Green</button>\r\n        <button class=\"mb-sm btn btn-purple btn-outline\" type=\"button\">Purple</button>\r\n        <button class=\"mb-sm btn btn-pink btn-outline\" type=\"button\">Pink</button>\r\n        <br/>\r\n        <br/>\r\n        <button class=\"mb-sm btn-lg btn btn-primary btn-outline\" type=\"button\">Outline Large</button>\r\n        <button class=\"mb-sm btn-sm btn btn-primary btn-outline\" type=\"button\">Outline Small</button>\r\n        <button class=\"mb-sm btn-xs btn btn-primary btn-outline\" type=\"button\">Outline xSmall</button>\r\n    </div>\r\n</div>\r\n<!-- END panel-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Button Pills</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>Pill left</p>\r\n                <p>\r\n                    <button class=\"btn btn-pill-left btn-default\" type=\"button\">Default</button>\r\n                    <button class=\"btn btn-pill-left btn-primary\" type=\"button\">Primary</button>\r\n                    <button class=\"btn btn-pill-left btn-success\" type=\"button\">Success</button>\r\n                    <button class=\"btn btn-pill-left btn-info\" type=\"button\">Info</button>\r\n                    <button class=\"btn btn-pill-left btn-warning\" type=\"button\">Warning</button>\r\n                    <button class=\"btn btn-pill-left btn-danger\" type=\"button\">Danger</button>\r\n                    <button class=\"btn btn-pill-left btn-inverse\" type=\"button\">Inverse</button>\r\n                </p>\r\n                <p>Pill right</p>\r\n                <p>\r\n                    <button class=\"btn btn-pill-right btn-default\" type=\"button\">Default</button>\r\n                    <button class=\"btn btn-pill-right btn-primary\" type=\"button\">Primary</button>\r\n                    <button class=\"btn btn-pill-right btn-success\" type=\"button\">Success</button>\r\n                    <button class=\"btn btn-pill-right btn-info\" type=\"button\">Info</button>\r\n                    <button class=\"btn btn-pill-right btn-warning\" type=\"button\">Warning</button>\r\n                    <button class=\"btn btn-pill-right btn-danger\" type=\"button\">Danger</button>\r\n                    <button class=\"btn btn-pill-right btn-inverse\" type=\"button\">Inverse</button>\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Button Oval</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <button class=\"btn btn-oval btn-default\" type=\"button\">Default</button>\r\n                <button class=\"btn btn-oval btn-primary\" type=\"button\">Primary</button>\r\n                <button class=\"btn btn-oval btn-success\" type=\"button\">Success</button>\r\n                <button class=\"btn btn-oval btn-info\" type=\"button\">Info</button>\r\n                <button class=\"btn btn-oval btn-warning\" type=\"button\">Warning</button>\r\n                <button class=\"btn btn-oval btn-danger\" type=\"button\">Danger</button>\r\n                <button class=\"btn btn-oval btn-inverse\" type=\"button\">Inverse</button>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Button Square</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <button class=\"btn btn-square btn-default\" type=\"button\">Default</button>\r\n                <button class=\"btn btn-square btn-primary\" type=\"button\">Primary</button>\r\n                <button class=\"btn btn-square btn-success\" type=\"button\">Success</button>\r\n                <button class=\"btn btn-square btn-info\" type=\"button\">Info</button>\r\n                <button class=\"btn btn-square btn-warning\" type=\"button\">Warning</button>\r\n                <button class=\"btn btn-square btn-danger\" type=\"button\">Danger</button>\r\n                <button class=\"btn btn-square btn-inverse\" type=\"button\">Inverse</button>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Button dropdown</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <!-- START button group-->\r\n                <div class=\"btn-group mb-sm\" dropdown>\r\n                    <button class=\"btn dropdown-toggle btn-default\" type=\"button\" dropdownToggle>default\r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group mb-sm\" dropdown>\r\n                    <button class=\"btn dropdown-toggle btn-primary\" type=\"button\" dropdownToggle>primary\r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group mb-sm\" dropdown>\r\n                    <button class=\"btn dropdown-toggle btn-success\" type=\"button\" dropdownToggle>success\r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group mb-sm\" dropdown>\r\n                    <button class=\"btn dropdown-toggle btn-info\" type=\"button\" dropdownToggle>info\r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group mb-sm\" dropdown>\r\n                    <button class=\"btn dropdown-toggle btn-warning\" type=\"button\" dropdownToggle>warning\r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group mb-sm\" dropdown>\r\n                    <button class=\"btn dropdown-toggle btn-danger\" type=\"button\" dropdownToggle>danger\r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group mb-sm\" dropdown>\r\n                    <button class=\"btn dropdown-toggle btn-inverse\" type=\"button\" dropdownToggle>inverse\r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title ellipsis\">Split button dropdown</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <!-- START button group-->\r\n                <div class=\"btn-group\" dropdown>\r\n                    <button class=\"btn btn-default\" type=\"button\">Action</button>\r\n                    <button class=\"btn dropdown-toggle btn-default\" type=\"button\" dropdownToggle>\r\n                        <span class=\"caret\"></span>\r\n                        <span class=\"sr-only\">default</span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group\" dropdown>\r\n                    <button class=\"btn btn-primary\" type=\"button\">Action</button>\r\n                    <button class=\"btn dropdown-toggle btn-primary\" type=\"button\" dropdownToggle>\r\n                        <span class=\"caret\"></span>\r\n                        <span class=\"sr-only\">primary</span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group\" dropdown>\r\n                    <button class=\"btn btn-success\" type=\"button\">Action</button>\r\n                    <button class=\"btn dropdown-toggle btn-success\" type=\"button\" dropdownToggle>\r\n                        <span class=\"caret\"></span>\r\n                        <span class=\"sr-only\">success</span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group\" dropdown>\r\n                    <button class=\"btn btn-info\" type=\"button\">Action</button>\r\n                    <button class=\"btn dropdown-toggle btn-info\" type=\"button\" dropdownToggle>\r\n                        <span class=\"caret\"></span>\r\n                        <span class=\"sr-only\">info</span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group\" dropdown>\r\n                    <button class=\"btn btn-warning\" type=\"button\">Action</button>\r\n                    <button class=\"btn dropdown-toggle btn-warning\" type=\"button\" dropdownToggle>\r\n                        <span class=\"caret\"></span>\r\n                        <span class=\"sr-only\">warning</span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group\" dropdown>\r\n                    <button class=\"btn btn-danger\" type=\"button\">Action</button>\r\n                    <button class=\"btn dropdown-toggle btn-danger\" type=\"button\" dropdownToggle>\r\n                        <span class=\"caret\"></span>\r\n                        <span class=\"sr-only\">danger</span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div class=\"btn-group\" dropdown>\r\n                    <button class=\"btn btn-inverse\" type=\"button\">Action</button>\r\n                    <button class=\"btn dropdown-toggle btn-inverse\" type=\"button\" dropdownToggle>\r\n                        <span class=\"caret\"></span>\r\n                        <span class=\"sr-only\">inverse</span>\r\n                    </button>\r\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li><a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END button group-->\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START panel-->\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">Button actions</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <!-- START row-->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <h4>Single toggle</h4><pre>{{singleModel}}</pre>\r\n                <button class=\"btn btn-primary\" type=\"button\" [(ngModel)]=\"singleModel\" btnCheckbox>Single Toggle</button>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <h4>Checkbox</h4>\r\n                <pre>{{checkModel | json}}</pre>\r\n                <div class=\"btn-group\">\r\n                    <label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.left\" btnCheckbox>Left</label>\r\n                    <label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.middle\" btnCheckbox>Middle</label>\r\n                    <label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.right\" btnCheckbox>Right</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <h4>Radio &amp; Uncheckable Radio</h4><pre>{{radioModel || 'null'}}</pre>\r\n                <div class=\"btn-group\">\r\n                    <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"'Left'\">Left</label>\r\n                    <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"'Middle'\">Middle</label>\r\n                    <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"'Right'\">Right</label>\r\n                </div>\r\n                <div class=\"btn-group\">\r\n                    <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"'Left'\" uncheckable >Left</label>\r\n                    <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"'Middle'\" uncheckable >Middle</label>\r\n                    <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"'Right'\" uncheckable >Right</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- START panel-->\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">Pagination</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <!-- START row-->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n                <div>\r\n                    <h4>Default</h4>\r\n                    <pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\r\n                    <pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (numPages)=\"smallnumPages\"></pagination>\r\n                    <pre>The selected page no: {{currentPage}}</pre>\r\n                    <button class=\"btn btn-info\" (click)=\"setPage(3)\">Set current page to: 3</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <h4>Pager</h4>\r\n                <pager [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\"></pager>\r\n                <hr/>\r\n                <h4>Limit the maximum visible buttons</h4>\r\n                <pagination class=\"pagination-sm\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\"></pagination>\r\n                <pagination class=\"pagination-sm\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\" [rotate]=\"false\" (numPages)=\"numPages\"></pagination>\r\n                <pre>Page: {{bigCurrentPage}} / {{numPages}}</pre>\r\n            </div>\r\n        </div>\r\n        <!-- END row-->\r\n    </div>\r\n</div>\r\n<!-- END panel-->\r\n"

/***/ }),

/***/ "./src/app/routes/elements/buttons/buttons.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/routes/elements/buttons/buttons.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/buttons/buttons.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/elements/buttons/buttons.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        // buttons
        this.singleModel = true;
        this.radioModel = 'Middle';
        this.checkModel = { left: false, middle: true, right: false };
        // pagination/pager
        this.totalItems = 64;
        this.currentPage = 4;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
    }
    ButtonsComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    ButtonsComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/routes/elements/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/routes/elements/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/colors/colors.component.html":
/*!**************************************************************!*\
  !*** ./src/app/routes/elements/colors/colors.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Colors\r\n    <small>Color swatches</small>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n        <div class=\"table-grid\">\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-primary-light\">.bg-primary-light</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-primary\">.bg-primary</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-primary-dark\">.bg-primary-dark</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-grid\">\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-success-light\">.bg-success-light</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-success\">.bg-success</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-success-dark\">.bg-success-dark</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-grid\">\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-info-light\">.bg-info-light</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-info\">.bg-info</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-info-dark\">.bg-info-dark</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-grid\">\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-warning-light\">.bg-warning-light</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-warning\">.bg-warning</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-warning-dark\">.bg-warning-dark</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-grid\">\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-danger-light\">.bg-danger-light</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-danger\">.bg-danger</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-danger-dark\">.bg-danger-dark</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-grid\">\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-inverse-light\">.bg-inverse-light</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-inverse\">.bg-inverse</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-inverse-dark\">.bg-inverse-dark</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-grid\">\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-green-light\">.bg-green-light</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-green\">.bg-green</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-green-dark\">.bg-green-dark</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-grid\">\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-pink-light\">.bg-pink-light</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-pink\">.bg-pink</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-pink-dark\">.bg-pink-dark</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-grid\">\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-purple-light\">.bg-purple-light</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-purple\">.bg-purple</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-purple-dark\">.bg-purple-dark</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-grid\">\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-yellow-light\">.bg-yellow-light</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-yellow\">.bg-yellow</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-yellow-dark\">.bg-yellow-dark</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-grid\">\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-gray-darker\">.bg-gray-darker</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-gray-dark\">.bg-gray-dark</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-gray\">.bg-gray</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-gray-light\">.bg-gray-light</div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"box-placeholder b0 bg-gray-lighter\">.bg-gray-lighter</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/elements/colors/colors.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/routes/elements/colors/colors.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/colors/colors.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/elements/colors/colors.component.ts ***!
  \************************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorsComponent = /** @class */ (function () {
    function ColorsComponent() {
    }
    ColorsComponent.prototype.ngOnInit = function () {
    };
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/routes/elements/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.scss */ "./src/app/routes/elements/colors/colors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/dropdown/dropdown.component.html":
/*!******************************************************************!*\
  !*** ./src/app/routes/elements/dropdown/dropdown.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Dropdown Animations\r\n   <small>Extends the dropdown effects when open just adding an animation class</small>\r\n</div>\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>bounce <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated bounce\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>flash <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated flash\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>pulse <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated pulse\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>rubberBand <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated rubberBand\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>shake <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated shake\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>swing <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated swing\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>tada <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated tada\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>wobble <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated wobble\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>bounceIn <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated bounceIn\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>bounceInDown <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated bounceInDown\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>bounceInLeft <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated bounceInLeft\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>bounceInRight <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated bounceInRight\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>bounceInUp <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated bounceInUp\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>fadeIn <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>fadeInDown <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated fadeInDown\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>fadeInDownBig <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated fadeInDownBig\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>fadeInLeft <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated fadeInLeft\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>fadeInLeftBig <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated fadeInLeftBig\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>fadeInRight <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated fadeInRight\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>fadeInRightBig <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated fadeInRightBig\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>fadeInUp <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated fadeInUp\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>fadeInUpBig <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated fadeInUpBig\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>flip <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated flip\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>flipInX <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInX\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>flipInY <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInY\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>lightSpeedIn <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated lightSpeedIn\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>rotateIn <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated rotateIn\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>rotateInDownLeft <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated rotateInDownLeft\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>rotateInDownRight <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated rotateInDownRight\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>rotateInUpLeft <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated rotateInUpLeft\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>rotateInUpRight <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated rotateInUpRight\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>hinge <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated hinge\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>rollIn <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated rollIn\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>zoomIn <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated zoomIn\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>zoomInDown <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated zoomInDown\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>zoomInLeft <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated zoomInLeft\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>zoomInRight <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated zoomInRight\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <!-- START box placeholder-->\r\n        <div class=\"box-placeholder\">\r\n            <!-- START button group-->\r\n            <div class=\"btn-group\" dropdown>\r\n                <button class=\"btn btn-default\" dropdownToggle>zoomInUp <b class=\"caret\"></b>\r\n                </button>\r\n                <ul *dropdownMenu class=\"dropdown-menu animated zoomInUp\" role=\"menu\">\r\n                    <li><a href=\"#\">Action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Another action</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Something else here</a>\r\n                    </li>\r\n                    <li><a href=\"#\">Separated link</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- END button group-->\r\n        </div>\r\n        <!-- END box placeholder-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n"

/***/ }),

/***/ "./src/app/routes/elements/dropdown/dropdown.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/routes/elements/dropdown/dropdown.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/dropdown/dropdown.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/elements/dropdown/dropdown.component.ts ***!
  \****************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/routes/elements/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/routes/elements/dropdown/dropdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/elements.module.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/elements/elements.module.ts ***!
  \****************************************************/
/*! exports provided: ElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsModule", function() { return ElementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var ng2_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dnd */ "./node_modules/ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/routes/elements/buttons/buttons.component.ts");
/* harmony import */ var _spinners_spinners_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spinners/spinners.component */ "./src/app/routes/elements/spinners/spinners.component.ts");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./src/app/routes/elements/dropdown/dropdown.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/routes/elements/grid/grid.component.ts");
/* harmony import */ var _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gridmasonry/gridmasonry.component */ "./src/app/routes/elements/gridmasonry/gridmasonry.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/routes/elements/typography/typography.component.ts");
/* harmony import */ var _iconsfont_iconsfont_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./iconsfont/iconsfont.component */ "./src/app/routes/elements/iconsfont/iconsfont.component.ts");
/* harmony import */ var _iconsweather_iconsweather_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./iconsweather/iconsweather.component */ "./src/app/routes/elements/iconsweather/iconsweather.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/routes/elements/colors/colors.component.ts");
/* harmony import */ var _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interaction/interaction.component */ "./src/app/routes/elements/interaction/interaction.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/routes/elements/notification/notification.component.ts");
/* harmony import */ var _navtree_navtree_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navtree/navtree.component */ "./src/app/routes/elements/navtree/navtree.component.ts");
/* harmony import */ var _sortable_sortable_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sortable/sortable.component */ "./src/app/routes/elements/sortable/sortable.component.ts");
/* harmony import */ var _infinitescroll_infinitescroll_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./infinitescroll/infinitescroll.component */ "./src/app/routes/elements/infinitescroll/infinitescroll.component.ts");
/* harmony import */ var _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sweetalert/sweetalert.component */ "./src/app/routes/elements/sweetalert/sweetalert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: 'buttons', component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsComponent"] },
    { path: 'interaction', component: _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_16__["InteractionComponent"] },
    { path: 'notification', component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_17__["NotificationComponent"] },
    { path: 'sweetalert', component: _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_21__["SweetalertComponent"] },
    { path: 'spinners', component: _spinners_spinners_component__WEBPACK_IMPORTED_MODULE_8__["SpinnersComponent"] },
    { path: 'dropdown', component: _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["DropdownComponent"] },
    { path: 'navtree', component: _navtree_navtree_component__WEBPACK_IMPORTED_MODULE_18__["NavtreeComponent"] },
    { path: 'sortable', component: _sortable_sortable_component__WEBPACK_IMPORTED_MODULE_19__["SortableComponent"] },
    { path: 'grid', component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"] },
    { path: 'gridmasonry', component: _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_11__["GridmasonryComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_12__["TypographyComponent"] },
    { path: 'iconsfont', component: _iconsfont_iconsfont_component__WEBPACK_IMPORTED_MODULE_13__["IconsfontComponent"] },
    { path: 'iconsweather', component: _iconsweather_iconsweather_component__WEBPACK_IMPORTED_MODULE_14__["IconsweatherComponent"] },
    { path: 'colors', component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_15__["ColorsComponent"] },
    { path: 'infinitescroll', component: _infinitescroll_infinitescroll_component__WEBPACK_IMPORTED_MODULE_20__["InfinitescrollComponent"] }
];
var ElementsModule = /** @class */ (function () {
    function ElementsModule() {
    }
    ElementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TreeModule"],
                ng2_dnd__WEBPACK_IMPORTED_MODULE_3__["DndModule"].forRoot(),
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"]
            ],
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsComponent"],
                _spinners_spinners_component__WEBPACK_IMPORTED_MODULE_8__["SpinnersComponent"],
                _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["DropdownComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"],
                _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_11__["GridmasonryComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_12__["TypographyComponent"],
                _iconsfont_iconsfont_component__WEBPACK_IMPORTED_MODULE_13__["IconsfontComponent"],
                _iconsweather_iconsweather_component__WEBPACK_IMPORTED_MODULE_14__["IconsweatherComponent"],
                _colors_colors_component__WEBPACK_IMPORTED_MODULE_15__["ColorsComponent"],
                _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_16__["InteractionComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_17__["NotificationComponent"],
                _navtree_navtree_component__WEBPACK_IMPORTED_MODULE_18__["NavtreeComponent"],
                _sortable_sortable_component__WEBPACK_IMPORTED_MODULE_19__["SortableComponent"],
                _infinitescroll_infinitescroll_component__WEBPACK_IMPORTED_MODULE_20__["InfinitescrollComponent"],
                _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_21__["SweetalertComponent"]
            ],
            providers: [
                angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ElementsModule);
    return ElementsModule;
}());



/***/ }),

/***/ "./src/app/routes/elements/grid/grid.component.html":
/*!**********************************************************!*\
  !*** ./src/app/routes/elements/grid/grid.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Grid</div>\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                <h3>Example: Stacked-to-horizontal</h3>\r\n                <p>Using a single set of<code>.col-md-*</code>grid classes, you can create a default grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any<code>.row</code>.</p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div class=\"box-placeholder\">.col-md-1</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"box-placeholder\">.col-md-8</div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"box-placeholder\">.col-md-4</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"box-placeholder\">.col-md-4</div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"box-placeholder\">.col-md-4</div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"box-placeholder\">.col-md-4</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"box-placeholder\">.col-md-6</div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"box-placeholder\">.col-md-6</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                <h3>Example: Mobile and desktop</h3>\r\n                <p>Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding<code>.col-xs-*</code><code>.col-md-*</code>to your columns. See the example below for a better idea of how it all works.</p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-md-8\">\r\n                        <div class=\"box-placeholder\">.col-xs-12 .col-md-8</div>\r\n                    </div>\r\n                    <div class=\"col-xs-6 col-md-4\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-md-4</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6 col-md-4\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-md-4</div>\r\n                    </div>\r\n                    <div class=\"col-xs-6 col-md-4\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-md-4</div>\r\n                    </div>\r\n                    <div class=\"col-xs-6 col-md-4\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-md-4</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6\">\r\n                        <div class=\"box-placeholder\">.col-xs-6</div>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <div class=\"box-placeholder\">.col-xs-6</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                <h3>Example: Mobile, tablet, desktops</h3>\r\n                <p>Build on the previous example by creating even more dynamic and powerful layouts with tablet<code>.col-sm-*</code>classes.</p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-8\">\r\n                        <div class=\"box-placeholder\">.col-xs-12 .col-sm-6 .col-md-8</div>\r\n                    </div>\r\n                    <div class=\"col-xs-6 col-md-4\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-md-4</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6 col-sm-4\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-sm-4</div>\r\n                    </div>\r\n                    <div class=\"col-xs-6 col-sm-4\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-sm-4</div>\r\n                    </div>\r\n                    <div class=\"clearfix visible-xs\">\r\n                        <div class=\"box-placeholder\"></div>\r\n                    </div>\r\n                    <div class=\"col-xs-6 col-sm-4\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-sm-4</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                <h3 id=\"grid-responsive-resets\">Responsive column resets</h3>\r\n                <p>With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a<code>.clearfix</code>and our\r\n                    <a href=\"#responsive-utilities\">responsive utility classes</a>.</p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6 col-sm-3\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-sm-3\r\n                            <br/>Resize your viewport or check it out on your phone for an example.</div>\r\n                    </div>\r\n                    <div class=\"col-xs-6 col-sm-3\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-sm-3</div>\r\n                    </div>\r\n                    <div class=\"clearfix visible-xs\"></div>\r\n                    <div class=\"col-xs-6 col-sm-3\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-sm-3</div>\r\n                    </div>\r\n                    <div class=\"col-xs-6 col-sm-3\">\r\n                        <div class=\"box-placeholder\">.col-xs-6 .col-sm-3</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                <h3 id=\"grid-offsetting\">Offsetting columns</h3>\r\n                <p>Move columns to the right using<code>.col-md-offset-*</code>classes. These classes increase the left margin of a column by<code>*</code>columns. For example,<code>.col-md-offset-4</code>moves<code>.col-md-4</code>over four columns.</p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"box-placeholder\">.col-md-4</div>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-md-offset-4\">\r\n                        <div class=\"box-placeholder\">.col-md-4 .col-md-offset-4</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3 col-md-offset-3\">\r\n                        <div class=\"box-placeholder\">.col-md-3 .col-md-offset-3</div>\r\n                    </div>\r\n                    <div class=\"col-md-3 col-md-offset-3\">\r\n                        <div class=\"box-placeholder\">.col-md-3 .col-md-offset-3</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-md-offset-3\">\r\n                        <div class=\"box-placeholder\">.col-md-6 .col-md-offset-3</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                <h3 id=\"grid-nesting\">Nesting columns</h3>\r\n                <p>To nest your content with the default grid, add a new<code>.row</code>and set of<code>.col-md-*</code>columns within an existing<code>.col-md-*</code>column. Nested rows should include a set of columns that add up to 12.</p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"box-placeholder\">Level 1: .col-md-9\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"box-placeholder\">Level 2: .col-md-6</div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"box-placeholder\">Level 2: .col-md-6</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                <h3 id=\"grid-column-ordering\">Column ordering</h3>\r\n                <p>Easily change the order of our built-in grid columns with<code>.col-md-push-*</code>and<code>.col-md-pull-*</code>modifier classes.</p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-9 col-md-push-3\">\r\n                        <div class=\"box-placeholder\">.col-md-9 .col-md-push-3</div>\r\n                    </div>\r\n                    <div class=\"col-md-3 col-md-pull-9\">\r\n                        <div class=\"box-placeholder\">.col-md-3 .col-md-pull-9</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n"

/***/ }),

/***/ "./src/app/routes/elements/grid/grid.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/routes/elements/grid/grid.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/grid/grid.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/elements/grid/grid.component.ts ***!
  \********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/routes/elements/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/routes/elements/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/gridmasonry/gridmasonry.component.html":
/*!************************************************************************!*\
  !*** ./src/app/routes/elements/gridmasonry/gridmasonry.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Grid Masonry\r\n   <small>Pure CSS and mobile first with a fallback to inline grid.</small>\r\n</div>\r\n<div class=\"row-masonry row-masonry-xl-6 row-masonry-lg-4 row-masonry-md-3 row-masonry-sm-2\">\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Integer tincidunt nisi id libero tristique aliquet. Pellentesque a commodo est. Proin ut mi augue, non laoreet ligula. Vestibulum ante ipsum primis in faucibus orci et ultrices posuere cubilia Curae; Class taciti conubia nostra, per himenaeos.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Integer tincidunt nisi id libero tristique aliquet. Pellentesque a commodo est. Proin ut mi augue, non laoreet ligula.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Integer tincidunt nisi id libero tristique aliquet. Pellentesque a commodo est. Proin ut mi augue, non laoreet ligula. Vestibulum ante ipsum primis in faucibus orci et ultrices posuere cubilia Curae; Class taciti conubia nostra, per himenaeos.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Integer tincidunt nisi id libero tristique aliquet. Pellentesque a commodo est. Proin ut mi augue, non laoreet ligula. Vestibulum ante ipsum primis in faucibus orci et ultrices posuere cubilia Curae; Class taciti conubia nostra, per himenaeos.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Integer tincidunt nisi id libero tristique aliquet. Pellentesque a commodo est. Proin ut mi augue, non laoreet ligula.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Integer tincidunt nisi id libero tristique aliquet. Pellentesque a commodo est. Proin ut mi augue, non laoreet ligula. Vestibulum ante ipsum primis in faucibus orci et ultrices posuere cubilia Curae; Class taciti conubia nostra, per himenaeos.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Integer tincidunt nisi id libero tristique aliquet. Pellentesque a commodo est. Proin ut mi augue, non laoreet ligula. Vestibulum ante ipsum primis in faucibus orci et ultrices posuere cubilia Curae; Class taciti conubia nostra, per himenaeos.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Integer tincidunt nisi id libero tristique aliquet. Pellentesque a commodo est. Proin ut mi augue, non laoreet ligula.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Integer tincidunt nisi id libero tristique aliquet. Pellentesque a commodo est. Proin ut mi augue, non laoreet ligula. Vestibulum ante ipsum primis in faucibus orci et ultrices posuere cubilia Curae; Class taciti conubia nostra, per himenaeos.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Integer tincidunt nisi id libero tristique aliquet. Pellentesque a commodo est. Proin ut mi augue, non laoreet ligula. Vestibulum ante ipsum primis in faucibus orci et ultrices posuere cubilia Curae; Class taciti conubia nostra, per himenaeos.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Aenean scelerisque suscipit arcu a consectetur.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <div class=\"box-placeholder m0\">\r\n            <p class=\"text-center text-muted\">\r\n                <strong>Masonry Item</strong>\r\n            </p>\r\n            <p>Integer tincidunt nisi id libero tristique aliquet. Pellentesque a commodo est. Proin ut mi augue, non laoreet ligula. Vestibulum ante ipsum primis in faucibus orci et ultrices posuere cubilia Curae; Class taciti conubia nostra, per himenaeos.</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<h4 class=\"page-header\">Masonry with any kind of element</h4>\r\n<div class=\"row-masonry row-masonry-md-4 row-masonry-sm-2\">\r\n    <div class=\"col-masonry\">\r\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/bg1.jpg\" alt=\"\" />\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/bg4.jpg\" alt=\"\" />\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/bg2.jpg\" alt=\"\" />\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/bg5.jpg\" alt=\"\" />\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/bg6.jpg\" alt=\"\" />\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/bg7.jpg\" alt=\"\" />\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/bg8.jpg\" alt=\"\" />\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/bg9.jpg\" alt=\"\" />\r\n    </div>\r\n    <div class=\"col-masonry\">\r\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/bg10.jpg\" alt=\"\" />\r\n    </div>\r\n</div>\r\n<p>Supported from IE10. <a href=\"http://caniuse.com/#feat=multicolumn\">Can I Use.</a>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/routes/elements/gridmasonry/gridmasonry.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/routes/elements/gridmasonry/gridmasonry.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/gridmasonry/gridmasonry.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/routes/elements/gridmasonry/gridmasonry.component.ts ***!
  \**********************************************************************/
/*! exports provided: GridmasonryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridmasonryComponent", function() { return GridmasonryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridmasonryComponent = /** @class */ (function () {
    function GridmasonryComponent() {
    }
    GridmasonryComponent.prototype.ngOnInit = function () {
    };
    GridmasonryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gridmasonry',
            template: __webpack_require__(/*! ./gridmasonry.component.html */ "./src/app/routes/elements/gridmasonry/gridmasonry.component.html"),
            styles: [__webpack_require__(/*! ./gridmasonry.component.scss */ "./src/app/routes/elements/gridmasonry/gridmasonry.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridmasonryComponent);
    return GridmasonryComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/iconsfont/iconsfont.component.html":
/*!********************************************************************!*\
  !*** ./src/app/routes/elements/iconsfont/iconsfont.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Icons\r\n   <small>Font Awesome gives you scalable vector icons that can instantly be customized</small>\r\n</div>\r\n<h4 class=\"page-header mt0\">Simple Line icons</h4>\r\n<div class=\"row list-icon\">\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-user\"></em>.icon-user</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-people\"></em>.icon-people</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-user-female\"></em>.icon-user-female</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-user-follow\"></em>.icon-user-follow</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-user-following\"></em>.icon-user-following</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-user-unfollow\"></em>.icon-user-unfollow</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-login\"></em>.icon-login</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-logout\"></em>.icon-logout</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-emotsmile\"></em>.icon-emotsmile</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-phone\"></em>.icon-phone</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-call-end\"></em>.icon-call-end</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-call-in\"></em>.icon-call-in</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-call-out\"></em>.icon-call-out</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-map\"></em>.icon-map</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-location-pin\"></em>.icon-location-pin</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-direction\"></em>.icon-direction</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-directions\"></em>.icon-directions</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-compass\"></em>.icon-compass</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-layers\"></em>.icon-layers</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-menu\"></em>.icon-menu</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-list\"></em>.icon-list</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-options-vertical\"></em>.icon-options-vertical</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-options\"></em>.icon-options</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-arrow-down\"></em>.icon-arrow-down</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-arrow-left\"></em>.icon-arrow-left</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-arrow-right\"></em>.icon-arrow-right</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-arrow-up\"></em>.icon-arrow-up</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-arrow-up-circle\"></em>.icon-arrow-up-circle</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-arrow-left-circle\"></em>.icon-arrow-left-circle</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-arrow-right-circle\"></em>.icon-arrow-right-circle</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-arrow-down-circle\"></em>.icon-arrow-down-circle</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-check\"></em>.icon-check</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-clock\"></em>.icon-clock</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-plus\"></em>.icon-plus</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-close\"></em>.icon-close</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-trophy\"></em>.icon-trophy</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-screen-smartphone\"></em>.icon-screen-smartphone</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-screen-desktop\"></em>.icon-screen-desktop</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-plane\"></em>.icon-plane</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-notebook\"></em>.icon-notebook</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-mustache\"></em>.icon-mustache</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-mouse\"></em>.icon-mouse</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-magnet\"></em>.icon-magnet</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-energy\"></em>.icon-energy</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-disc\"></em>.icon-disc</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-cursor\"></em>.icon-cursor</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-cursor-move\"></em>.icon-cursor-move</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-crop\"></em>.icon-crop</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-chemistry\"></em>.icon-chemistry</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-speedometer\"></em>.icon-speedometer</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-shield\"></em>.icon-shield</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-screen-tablet\"></em>.icon-screen-tablet</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-magic-wand\"></em>.icon-magic-wand</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-hourglass\"></em>.icon-hourglass</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-graduation\"></em>.icon-graduation</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-ghost\"></em>.icon-ghost</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-game-controller\"></em>.icon-game-controller</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-fire\"></em>.icon-fire</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-eyeglass\"></em>.icon-eyeglass</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-envelope-open\"></em>.icon-envelope-open</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-envelope-letter\"></em>.icon-envelope-letter</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-bell\"></em>.icon-bell</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-badge\"></em>.icon-badge</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-anchor\"></em>.icon-anchor</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-wallet\"></em>.icon-wallet</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-vector\"></em>.icon-vector</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-speech\"></em>.icon-speech</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-puzzle\"></em>.icon-puzzle</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-printer\"></em>.icon-printer</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-present\"></em>.icon-present</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-playlist\"></em>.icon-playlist</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-pin\"></em>.icon-pin</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-picture\"></em>.icon-picture</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-handbag\"></em>.icon-handbag</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-globe-alt\"></em>.icon-globe-alt</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-globe\"></em>.icon-globe</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-folder-alt\"></em>.icon-folder-alt</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-folder\"></em>.icon-folder</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-film\"></em>.icon-film</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-feed\"></em>.icon-feed</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-drop\"></em>.icon-drop</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-drawar\"></em>.icon-drawar</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-docs\"></em>.icon-docs</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-doc\"></em>.icon-doc</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-diamond\"></em>.icon-diamond</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-cup\"></em>.icon-cup</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-calculator\"></em>.icon-calculator</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-bubbles\"></em>.icon-bubbles</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-briefcase\"></em>.icon-briefcase</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-book-open\"></em>.icon-book-open</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-basket-loaded\"></em>.icon-basket-loaded</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-basket\"></em>.icon-basket</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-bag\"></em>.icon-bag</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-action-undo\"></em>.icon-action-undo</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-action-redo\"></em>.icon-action-redo</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-wrench\"></em>.icon-wrench</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-umbrella\"></em>.icon-umbrella</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-trash\"></em>.icon-trash</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-tag\"></em>.icon-tag</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-support\"></em>.icon-support</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-frame\"></em>.icon-frame</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-size-fullscreen\"></em>.icon-size-fullscreen</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-size-actual\"></em>.icon-size-actual</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-shuffle\"></em>.icon-shuffle</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-share-alt\"></em>.icon-share-alt</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-share\"></em>.icon-share</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-rocket\"></em>.icon-rocket</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-question\"></em>.icon-question</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-pie-chart\"></em>.icon-pie-chart</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-pencil\"></em>.icon-pencil</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-note\"></em>.icon-note</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-loop\"></em>.icon-loop</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-home\"></em>.icon-home</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-grid\"></em>.icon-grid</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-graph\"></em>.icon-graph</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-microphone\"></em>.icon-microphone</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-music-tone-alt\"></em>.icon-music-tone-alt</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-music-tone\"></em>.icon-music-tone</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-earphones-alt\"></em>.icon-earphones-alt</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-earphones\"></em>.icon-earphones</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-equalizer\"></em>.icon-equalizer</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-like\"></em>.icon-like</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-dislike\"></em>.icon-dislike</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-control-start\"></em>.icon-control-start</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-control-rewind\"></em>.icon-control-rewind</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-control-play\"></em>.icon-control-play</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-control-pause\"></em>.icon-control-pause</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-control-forward\"></em>.icon-control-forward</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-control-end\"></em>.icon-control-end</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-volume-1\"></em>.icon-volume-1</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-volume-2\"></em>.icon-volume-2</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-volume-off\"></em>.icon-volume-off</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-calendar\"></em>.icon-calendar</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-bulb\"></em>.icon-bulb</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-chart\"></em>.icon-chart</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-ban\"></em>.icon-ban</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-bubble\"></em>.icon-bubble</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-camrecorder\"></em>.icon-camrecorder</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-camera\"></em>.icon-camera</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-cloud-download\"></em>.icon-cloud-download</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-cloud-upload\"></em>.icon-cloud-upload</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-envelope\"></em>.icon-envelope</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-eye\"></em>.icon-eye</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-flag\"></em>.icon-flag</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-heart\"></em>.icon-heart</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-info\"></em>.icon-info</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-key\"></em>.icon-key</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-link\"></em>.icon-link</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-lock\"></em>.icon-lock</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-lock-open\"></em>.icon-lock-open</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-magnifier\"></em>.icon-magnifier</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-magnifier-add\"></em>.icon-magnifier-add</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-magnifier-remove\"></em>.icon-magnifier-remove</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-paper-clip\"></em>.icon-paper-clip</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-paper-plane\"></em>.icon-paper-plane</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-power\"></em>.icon-power</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-refresh\"></em>.icon-refresh</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-reload\"></em>.icon-reload</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-settings\"></em>.icon-settings</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-star\"></em>.icon-star</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-symble-female\"></em>.icon-symble-female</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-symbol-male\"></em>.icon-symbol-male</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-target\"></em>.icon-target</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-credit-card\"></em>.icon-credit-card</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-paypal\"></em>.icon-paypal</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-tumblr\"></em>.icon-social-tumblr</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-twitter\"></em>.icon-social-twitter</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-facebook\"></em>.icon-social-facebook</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-instagram\"></em>.icon-social-instagram</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-linkedin\"></em>.icon-social-linkedin</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-pinterest\"></em>.icon-social-pinterest</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-github\"></em>.icon-social-github</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-gplus\"></em>.icon-social-gplus</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-reddit\"></em>.icon-social-reddit</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-skype\"></em>.icon-social-skype</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-dribbble\"></em>.icon-social-dribbble</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-behance\"></em>.icon-social-behance</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-foursqare\"></em>.icon-social-foursqare</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-soundcloud\"></em>.icon-social-soundcloud</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-spotify\"></em>.icon-social-spotify</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-stumbleupon\"></em>.icon-social-stumbleupon</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-youtube\"></em>.icon-social-youtube</div>\r\n    <div class=\"col-md-3 col-sm-4\">\r\n        <em class=\"icon-social-dropbox\"></em>.icon-social-dropbox</div>\r\n</div>\r\n<div id=\"demo-icons\">\r\n    <section id=\"web-application\">\r\n        <h4 class=\"page-header\">Web Application Icons</h4>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-adjust\"></em>fa-adjust</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-anchor\"></em>fa-anchor</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-archive\"></em>fa-archive</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-area-chart\"></em>fa-area-chart</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrows\"></em>fa-arrows</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrows-h\"></em>fa-arrows-h</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrows-v\"></em>fa-arrows-v</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-asterisk\"></em>fa-asterisk</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-at\"></em>fa-at</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-automobile\"></em>fa-automobile\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-ban\"></em>fa-ban</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bank\"></em>fa-bank\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bar-chart\"></em>fa-bar-chart</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bar-chart-o\"></em>fa-bar-chart-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-barcode\"></em>fa-barcode</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bars\"></em>fa-bars</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-beer\"></em>fa-beer</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bell\"></em>fa-bell</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bell-o\"></em>fa-bell-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bell-slash\"></em>fa-bell-slash</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bell-slash-o\"></em>fa-bell-slash-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bicycle\"></em>fa-bicycle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-binoculars\"></em>fa-binoculars</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-birthday-cake\"></em>fa-birthday-cake</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bolt\"></em>fa-bolt</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bomb\"></em>fa-bomb</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-book\"></em>fa-book</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bookmark\"></em>fa-bookmark</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bookmark-o\"></em>fa-bookmark-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-briefcase\"></em>fa-briefcase</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bug\"></em>fa-bug</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-building\"></em>fa-building</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-building-o\"></em>fa-building-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bullhorn\"></em>fa-bullhorn</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bullseye\"></em>fa-bullseye</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bus\"></em>fa-bus</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cab\"></em>fa-cab\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-calculator\"></em>fa-calculator</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-calendar\"></em>fa-calendar</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-calendar-o\"></em>fa-calendar-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-camera\"></em>fa-camera</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-camera-retro\"></em>fa-camera-retro</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-car\"></em>fa-car</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-square-o-down\"></em>fa-caret-square-o-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-square-o-left\"></em>fa-caret-square-o-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-square-o-right\"></em>fa-caret-square-o-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-square-o-up\"></em>fa-caret-square-o-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc\"></em>fa-cc</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-certificate\"></em>fa-certificate</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-check\"></em>fa-check</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-check-circle\"></em>fa-check-circle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-check-circle-o\"></em>fa-check-circle-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-check-square\"></em>fa-check-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-check-square-o\"></em>fa-check-square-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-child\"></em>fa-child</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-circle\"></em>fa-circle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-circle-o\"></em>fa-circle-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-circle-o-notch\"></em>fa-circle-o-notch</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-circle-thin\"></em>fa-circle-thin</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-clock-o\"></em>fa-clock-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-close\"></em>fa-close\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cloud\"></em>fa-cloud</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cloud-download\"></em>fa-cloud-download</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cloud-upload\"></em>fa-cloud-upload</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-code\"></em>fa-code</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-code-fork\"></em>fa-code-fork</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-coffee\"></em>fa-coffee</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cog\"></em>fa-cog</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cogs\"></em>fa-cogs</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-comment\"></em>fa-comment</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-comment-o\"></em>fa-comment-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-comments\"></em>fa-comments</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-comments-o\"></em>fa-comments-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-compass\"></em>fa-compass</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-copyright\"></em>fa-copyright</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-credit-card\"></em>fa-credit-card</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-crop\"></em>fa-crop</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-crosshairs\"></em>fa-crosshairs</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cube\"></em>fa-cube</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cubes\"></em>fa-cubes</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cutlery\"></em>fa-cutlery</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-dashboard\"></em>fa-dashboard\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-database\"></em>fa-database</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-desktop\"></em>fa-desktop</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-dot-circle-o\"></em>fa-dot-circle-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-download\"></em>fa-download</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-edit\"></em>fa-edit\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-ellipsis-h\"></em>fa-ellipsis-h</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-ellipsis-v\"></em>fa-ellipsis-v</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-envelope\"></em>fa-envelope</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-envelope-o\"></em>fa-envelope-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-envelope-square\"></em>fa-envelope-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-eraser\"></em>fa-eraser</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-exchange\"></em>fa-exchange</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-exclamation\"></em>fa-exclamation</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-exclamation-circle\"></em>fa-exclamation-circle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-exclamation-triangle\"></em>fa-exclamation-triangle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-external-link\"></em>fa-external-link</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-external-link-square\"></em>fa-external-link-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-eye\"></em>fa-eye</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-eye-slash\"></em>fa-eye-slash</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-eyedropper\"></em>fa-eyedropper</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-fax\"></em>fa-fax</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-female\"></em>fa-female</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-fighter-jet\"></em>fa-fighter-jet</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-archive-o\"></em>fa-file-archive-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-audio-o\"></em>fa-file-audio-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-code-o\"></em>fa-file-code-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-excel-o\"></em>fa-file-excel-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-image-o\"></em>fa-file-image-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-movie-o\"></em>fa-file-movie-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-pdf-o\"></em>fa-file-pdf-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-photo-o\"></em>fa-file-photo-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-picture-o\"></em>fa-file-picture-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-powerpoint-o\"></em>fa-file-powerpoint-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-sound-o\"></em>fa-file-sound-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-video-o\"></em>fa-file-video-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-word-o\"></em>fa-file-word-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-zip-o\"></em>fa-file-zip-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-film\"></em>fa-film</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-filter\"></em>fa-filter</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-fire\"></em>fa-fire</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-fire-extinguisher\"></em>fa-fire-extinguisher</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-flag\"></em>fa-flag</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-flag-checkered\"></em>fa-flag-checkered</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-flag-o\"></em>fa-flag-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-flash\"></em>fa-flash\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-flask\"></em>fa-flask</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-folder\"></em>fa-folder</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-folder-o\"></em>fa-folder-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-folder-open\"></em>fa-folder-open</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-folder-open-o\"></em>fa-folder-open-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-frown-o\"></em>fa-frown-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-futbol-o\"></em>fa-futbol-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-gamepad\"></em>fa-gamepad</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-gavel\"></em>fa-gavel</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-gear\"></em>fa-gear\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-gears\"></em>fa-gears\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-gift\"></em>fa-gift</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-glass\"></em>fa-glass</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-globe\"></em>fa-globe</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-graduation-cap\"></em>fa-graduation-cap</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-group\"></em>fa-group\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-hdd-o\"></em>fa-hdd-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-headphones\"></em>fa-headphones</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-heart\"></em>fa-heart</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-heart-o\"></em>fa-heart-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-history\"></em>fa-history</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-home\"></em>fa-home</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-image\"></em>fa-image\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-inbox\"></em>fa-inbox</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-info\"></em>fa-info</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-info-circle\"></em>fa-info-circle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-institution\"></em>fa-institution\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-key\"></em>fa-key</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-keyboard-o\"></em>fa-keyboard-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-language\"></em>fa-language</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-laptop\"></em>fa-laptop</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-leaf\"></em>fa-leaf</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-legal\"></em>fa-legal\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-lemon-o\"></em>fa-lemon-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-level-down\"></em>fa-level-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-level-up\"></em>fa-level-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-life-bouy\"></em>fa-life-bouy\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-life-buoy\"></em>fa-life-buoy\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-life-ring\"></em>fa-life-ring</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-life-saver\"></em>fa-life-saver\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-lightbulb-o\"></em>fa-lightbulb-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-line-chart\"></em>fa-line-chart</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-location-arrow\"></em>fa-location-arrow</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-lock\"></em>fa-lock</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-magic\"></em>fa-magic</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-magnet\"></em>fa-magnet</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-mail-forward\"></em>fa-mail-forward\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-mail-reply\"></em>fa-mail-reply\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-mail-reply-all\"></em>fa-mail-reply-all\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-male\"></em>fa-male</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-map-marker\"></em>fa-map-marker</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-meh-o\"></em>fa-meh-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-microphone\"></em>fa-microphone</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-microphone-slash\"></em>fa-microphone-slash</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-minus\"></em>fa-minus</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-minus-circle\"></em>fa-minus-circle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-minus-square\"></em>fa-minus-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-minus-square-o\"></em>fa-minus-square-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-mobile\"></em>fa-mobile</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-mobile-phone\"></em>fa-mobile-phone\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-money\"></em>fa-money</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-moon-o\"></em>fa-moon-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-mortar-board\"></em>fa-mortar-board\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-music\"></em>fa-music</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-navicon\"></em>fa-navicon\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-newspaper-o\"></em>fa-newspaper-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-paint-brush\"></em>fa-paint-brush</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-paper-plane\"></em>fa-paper-plane</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-paper-plane-o\"></em>fa-paper-plane-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-paw\"></em>fa-paw</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-pencil\"></em>fa-pencil</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-pencil-square\"></em>fa-pencil-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-pencil-square-o\"></em>fa-pencil-square-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-phone\"></em>fa-phone</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-phone-square\"></em>fa-phone-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-photo\"></em>fa-photo\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-picture-o\"></em>fa-picture-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-pie-chart\"></em>fa-pie-chart</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-plane\"></em>fa-plane</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-plug\"></em>fa-plug</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-plus\"></em>fa-plus</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-plus-circle\"></em>fa-plus-circle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-plus-square\"></em>fa-plus-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-plus-square-o\"></em>fa-plus-square-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-power-off\"></em>fa-power-off</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-print\"></em>fa-print</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-puzzle-piece\"></em>fa-puzzle-piece</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-qrcode\"></em>fa-qrcode</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-question\"></em>fa-question</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-question-circle\"></em>fa-question-circle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-quote-left\"></em>fa-quote-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-quote-right\"></em>fa-quote-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-random\"></em>fa-random</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-recycle\"></em>fa-recycle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-refresh\"></em>fa-refresh</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-remove\"></em>fa-remove\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-reorder\"></em>fa-reorder\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-reply\"></em>fa-reply</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-reply-all\"></em>fa-reply-all</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-retweet\"></em>fa-retweet</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-road\"></em>fa-road</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-rocket\"></em>fa-rocket</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-rss\"></em>fa-rss</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-rss-square\"></em>fa-rss-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-search\"></em>fa-search</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-search-minus\"></em>fa-search-minus</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-search-plus\"></em>fa-search-plus</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-send\"></em>fa-send\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-send-o\"></em>fa-send-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-share\"></em>fa-share</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-share-alt\"></em>fa-share-alt</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-share-alt-square\"></em>fa-share-alt-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-share-square\"></em>fa-share-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-share-square-o\"></em>fa-share-square-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-shield\"></em>fa-shield</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-shopping-cart\"></em>fa-shopping-cart</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sign-in\"></em>fa-sign-in</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sign-out\"></em>fa-sign-out</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-signal\"></em>fa-signal</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sitemap\"></em>fa-sitemap</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sliders\"></em>fa-sliders</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-smile-o\"></em>fa-smile-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-soccer-ball-o\"></em>fa-soccer-ball-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sort\"></em>fa-sort</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sort-alpha-asc\"></em>fa-sort-alpha-asc</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sort-alpha-desc\"></em>fa-sort-alpha-desc</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sort-amount-asc\"></em>fa-sort-amount-asc</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sort-amount-desc\"></em>fa-sort-amount-desc</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sort-asc\"></em>fa-sort-asc</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sort-desc\"></em>fa-sort-desc</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sort-down\"></em>fa-sort-down\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sort-numeric-asc\"></em>fa-sort-numeric-asc</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sort-numeric-desc\"></em>fa-sort-numeric-desc</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sort-up\"></em>fa-sort-up\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-space-shuttle\"></em>fa-space-shuttle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-spinner\"></em>fa-spinner</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-spoon\"></em>fa-spoon</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-square\"></em>fa-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-square-o\"></em>fa-square-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-star\"></em>fa-star</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-star-half\"></em>fa-star-half</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-star-half-empty\"></em>fa-star-half-empty\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-star-half-full\"></em>fa-star-half-full\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-star-half-o\"></em>fa-star-half-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-star-o\"></em>fa-star-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-suitcase\"></em>fa-suitcase</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sun-o\"></em>fa-sun-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-support\"></em>fa-support\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-tablet\"></em>fa-tablet</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-tachometer\"></em>fa-tachometer</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-tag\"></em>fa-tag</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-tags\"></em>fa-tags</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-tasks\"></em>fa-tasks</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-taxi\"></em>fa-taxi</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-terminal\"></em>fa-terminal</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-thumb-tack\"></em>fa-thumb-tack</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-thumbs-down\"></em>fa-thumbs-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-thumbs-o-down\"></em>fa-thumbs-o-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-thumbs-o-up\"></em>fa-thumbs-o-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-thumbs-up\"></em>fa-thumbs-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-ticket\"></em>fa-ticket</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-times\"></em>fa-times</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-times-circle\"></em>fa-times-circle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-times-circle-o\"></em>fa-times-circle-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-tint\"></em>fa-tint</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-toggle-down\"></em>fa-toggle-down\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-toggle-left\"></em>fa-toggle-left\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-toggle-off\"></em>fa-toggle-off</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-toggle-on\"></em>fa-toggle-on</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-toggle-right\"></em>fa-toggle-right\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-toggle-up\"></em>fa-toggle-up\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-trash\"></em>fa-trash</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-trash-o\"></em>fa-trash-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-tree\"></em>fa-tree</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-trophy\"></em>fa-trophy</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-truck\"></em>fa-truck</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-tty\"></em>fa-tty</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-umbrella\"></em>fa-umbrella</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-university\"></em>fa-university</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-unlock\"></em>fa-unlock</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-unlock-alt\"></em>fa-unlock-alt</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-unsorted\"></em>fa-unsorted\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-upload\"></em>fa-upload</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-user\"></em>fa-user</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-users\"></em>fa-users</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-video-camera\"></em>fa-video-camera</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-volume-down\"></em>fa-volume-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-volume-off\"></em>fa-volume-off</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-volume-up\"></em>fa-volume-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-warning\"></em>fa-warning\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-wheelchair\"></em>fa-wheelchair</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-wifi\"></em>fa-wifi</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-wrench\"></em>fa-wrench</div>\r\n        </div>\r\n    </section>\r\n    <section id=\"file-type\">\r\n        <h4 class=\"page-header\">File Type Icons</h4>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file\"></em>fa-file</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-archive-o\"></em>fa-file-archive-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-audio-o\"></em>fa-file-audio-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-code-o\"></em>fa-file-code-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-excel-o\"></em>fa-file-excel-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-image-o\"></em>fa-file-image-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-movie-o\"></em>fa-file-movie-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-o\"></em>fa-file-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-pdf-o\"></em>fa-file-pdf-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-photo-o\"></em>fa-file-photo-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-picture-o\"></em>fa-file-picture-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-powerpoint-o\"></em>fa-file-powerpoint-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-sound-o\"></em>fa-file-sound-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-text\"></em>fa-file-text</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-text-o\"></em>fa-file-text-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-video-o\"></em>fa-file-video-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-word-o\"></em>fa-file-word-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-zip-o\"></em>fa-file-zip-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section id=\"spinner\">\r\n        <h4 class=\"page-header\">Spinner Icons</h4>\r\n        <div class=\"alert alert-success\">\r\n            <ul class=\"fa-ul\">\r\n                <li>\r\n                    <em class=\"fa fa-info-circle fa-lg fa-li\"></em>These icons work great with the<code>fa-spin</code>class. Check out the<a class=\"alert-link\" href=\"../examples/#spinning\">spinning icons example</a>.</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-circle-o-notch\"></em>fa-circle-o-notch</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cog\"></em>fa-cog</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-gear\"></em>fa-gear\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-refresh\"></em>fa-refresh</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-spinner\"></em>fa-spinner</div>\r\n        </div>\r\n    </section>\r\n    <section id=\"form-control\">\r\n        <h4 class=\"page-header\">Form Control Icons</h4>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-check-square\"></em>fa-check-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-check-square-o\"></em>fa-check-square-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-circle\"></em>fa-circle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-circle-o\"></em>fa-circle-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-dot-circle-o\"></em>fa-dot-circle-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-minus-square\"></em>fa-minus-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-minus-square-o\"></em>fa-minus-square-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-plus-square\"></em>fa-plus-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-plus-square-o\"></em>fa-plus-square-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-square\"></em>fa-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-square-o\"></em>fa-square-o</div>\r\n        </div>\r\n    </section>\r\n    <section id=\"payment\">\r\n        <h4 class=\"page-header\">Payment Icons</h4>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-amex\"></em>fa-cc-amex</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-discover\"></em>fa-cc-discover</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-mastercard\"></em>fa-cc-mastercard</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-paypal\"></em>fa-cc-paypal</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-stripe\"></em>fa-cc-stripe</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-visa\"></em>fa-cc-visa</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-credit-card\"></em>fa-credit-card</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-google-wallet\"></em>fa-google-wallet</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-paypal\"></em>fa-paypal</div>\r\n        </div>\r\n    </section>\r\n    <section id=\"chart\">\r\n        <h4 class=\"page-header\">Chart Icons</h4>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-area-chart\"></em>fa-area-chart</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bar-chart\"></em>fa-bar-chart</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bar-chart-o\"></em>fa-bar-chart-o\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-line-chart\"></em>fa-line-chart</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-pie-chart\"></em>fa-pie-chart</div>\r\n        </div>\r\n    </section>\r\n    <section id=\"currency\">\r\n        <h4 class=\"page-header\">Currency Icons</h4>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bitcoin\"></em>fa-bitcoin\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-btc\"></em>fa-btc</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cny\"></em>fa-cny\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-dollar\"></em>fa-dollar\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-eur\"></em>fa-eur</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-euro\"></em>fa-euro\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-gbp\"></em>fa-gbp</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-ils\"></em>fa-ils</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-inr\"></em>fa-inr</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-jpy\"></em>fa-jpy</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-krw\"></em>fa-krw</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-money\"></em>fa-money</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-rmb\"></em>fa-rmb\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-rouble\"></em>fa-rouble\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-rub\"></em>fa-rub</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-ruble\"></em>fa-ruble\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-rupee\"></em>fa-rupee\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-shekel\"></em>fa-shekel\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-sheqel\"></em>fa-sheqel\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-try\"></em>fa-try</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-turkish-lira\"></em>fa-turkish-lira\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-usd\"></em>fa-usd</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-won\"></em>fa-won\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-yen\"></em>fa-yen\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section id=\"text-editor\">\r\n        <h4 class=\"page-header\">Text Editor Icons</h4>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-align-center\"></em>fa-align-center</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-align-justify\"></em>fa-align-justify</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-align-left\"></em>fa-align-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-align-right\"></em>fa-align-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bold\"></em>fa-bold</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-chain\"></em>fa-chain\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-chain-broken\"></em>fa-chain-broken</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-clipboard\"></em>fa-clipboard</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-columns\"></em>fa-columns</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-copy\"></em>fa-copy\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cut\"></em>fa-cut\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-dedent\"></em>fa-dedent\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-eraser\"></em>fa-eraser</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file\"></em>fa-file</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-o\"></em>fa-file-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-text\"></em>fa-file-text</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-file-text-o\"></em>fa-file-text-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-files-o\"></em>fa-files-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-floppy-o\"></em>fa-floppy-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-font\"></em>fa-font</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-header\"></em>fa-header</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-indent\"></em>fa-indent</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-italic\"></em>fa-italic</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-link\"></em>fa-link</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-list\"></em>fa-list</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-list-alt\"></em>fa-list-alt</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-list-ol\"></em>fa-list-ol</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-list-ul\"></em>fa-list-ul</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-outdent\"></em>fa-outdent</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-paperclip\"></em>fa-paperclip</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-paragraph\"></em>fa-paragraph</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-paste\"></em>fa-paste\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-repeat\"></em>fa-repeat</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-rotate-left\"></em>fa-rotate-left\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-rotate-right\"></em>fa-rotate-right\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-save\"></em>fa-save\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-scissors\"></em>fa-scissors</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-strikethrough\"></em>fa-strikethrough</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-subscript\"></em>fa-subscript</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-superscript\"></em>fa-superscript</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-table\"></em>fa-table</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-text-height\"></em>fa-text-height</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-text-width\"></em>fa-text-width</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-th\"></em>fa-th</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-th-large\"></em>fa-th-large</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-th-list\"></em>fa-th-list</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-underline\"></em>fa-underline</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-undo\"></em>fa-undo</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-unlink\"></em>fa-unlink\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section id=\"directional\">\r\n        <h4 class=\"page-header\">Directional Icons</h4>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-angle-double-down\"></em>fa-angle-double-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-angle-double-left\"></em>fa-angle-double-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-angle-double-right\"></em>fa-angle-double-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-angle-double-up\"></em>fa-angle-double-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-angle-down\"></em>fa-angle-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-angle-left\"></em>fa-angle-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-angle-right\"></em>fa-angle-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-angle-up\"></em>fa-angle-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-circle-down\"></em>fa-arrow-circle-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-circle-left\"></em>fa-arrow-circle-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-circle-o-down\"></em>fa-arrow-circle-o-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-circle-o-left\"></em>fa-arrow-circle-o-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-circle-o-right\"></em>fa-arrow-circle-o-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-circle-o-up\"></em>fa-arrow-circle-o-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-circle-right\"></em>fa-arrow-circle-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-circle-up\"></em>fa-arrow-circle-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-down\"></em>fa-arrow-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-left\"></em>fa-arrow-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-right\"></em>fa-arrow-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrow-up\"></em>fa-arrow-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrows\"></em>fa-arrows</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrows-alt\"></em>fa-arrows-alt</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrows-h\"></em>fa-arrows-h</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrows-v\"></em>fa-arrows-v</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-down\"></em>fa-caret-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-left\"></em>fa-caret-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-right\"></em>fa-caret-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-square-o-down\"></em>fa-caret-square-o-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-square-o-left\"></em>fa-caret-square-o-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-square-o-right\"></em>fa-caret-square-o-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-square-o-up\"></em>fa-caret-square-o-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-caret-up\"></em>fa-caret-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-chevron-circle-down\"></em>fa-chevron-circle-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-chevron-circle-left\"></em>fa-chevron-circle-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-chevron-circle-right\"></em>fa-chevron-circle-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-chevron-circle-up\"></em>fa-chevron-circle-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-chevron-down\"></em>fa-chevron-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-chevron-left\"></em>fa-chevron-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-chevron-right\"></em>fa-chevron-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-chevron-up\"></em>fa-chevron-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-hand-o-down\"></em>fa-hand-o-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-hand-o-left\"></em>fa-hand-o-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-hand-o-right\"></em>fa-hand-o-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-hand-o-up\"></em>fa-hand-o-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-long-arrow-down\"></em>fa-long-arrow-down</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-long-arrow-left\"></em>fa-long-arrow-left</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-long-arrow-right\"></em>fa-long-arrow-right</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-long-arrow-up\"></em>fa-long-arrow-up</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-toggle-down\"></em>fa-toggle-down\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-toggle-left\"></em>fa-toggle-left\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-toggle-right\"></em>fa-toggle-right\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-toggle-up\"></em>fa-toggle-up\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section id=\"video-player\">\r\n        <h4 class=\"page-header\">Video Player Icons</h4>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-arrows-alt\"></em>fa-arrows-alt</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-backward\"></em>fa-backward</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-compress\"></em>fa-compress</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-eject\"></em>fa-eject</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-expand\"></em>fa-expand</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-fast-backward\"></em>fa-fast-backward</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-fast-forward\"></em>fa-fast-forward</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-forward\"></em>fa-forward</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-pause\"></em>fa-pause</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-play\"></em>fa-play</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-play-circle\"></em>fa-play-circle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-play-circle-o\"></em>fa-play-circle-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-step-backward\"></em>fa-step-backward</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-step-forward\"></em>fa-step-forward</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-stop\"></em>fa-stop</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-youtube-play\"></em>fa-youtube-play</div>\r\n        </div>\r\n    </section>\r\n    <section id=\"brand\">\r\n        <h4 class=\"page-header\">Brand Icons</h4>\r\n        <div class=\"alert alert-success\">\r\n            <ul class=\"margin-bottom-none padding-left-lg\">\r\n                <li>All brand icons are trademarks of their respective owners.</li>\r\n                <li>The use of these trademarks does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"alert alert-warning\">\r\n            <h4>\r\n            <em class=\"fa fa-warning\"></em>Warning!</h4>Apparently, Adblock Plus can remove Font Awesome brand icons with their \"Remove Social Media Buttons\" setting. We will not use hacks to force them to display. Please<a class=\"alert-link\" href=\"https://adblockplus.org/en/bugs\">report an issue with Adblock Plus</a>if you believe this to be an error. To work around this, you'll need to modify the social icon class names.</div>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-adn\"></em>fa-adn</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-android\"></em>fa-android</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-angellist\"></em>fa-angellist</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-apple\"></em>fa-apple</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-behance\"></em>fa-behance</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-behance-square\"></em>fa-behance-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bitbucket\"></em>fa-bitbucket</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bitbucket-square\"></em>fa-bitbucket-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-bitcoin\"></em>fa-bitcoin\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-btc\"></em>fa-btc</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-amex\"></em>fa-cc-amex</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-discover\"></em>fa-cc-discover</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-mastercard\"></em>fa-cc-mastercard</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-paypal\"></em>fa-cc-paypal</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-stripe\"></em>fa-cc-stripe</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-cc-visa\"></em>fa-cc-visa</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-codepen\"></em>fa-codepen</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-css3\"></em>fa-css3</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-delicious\"></em>fa-delicious</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-deviantart\"></em>fa-deviantart</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-digg\"></em>fa-digg</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-dribbble\"></em>fa-dribbble</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-dropbox\"></em>fa-dropbox</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-drupal\"></em>fa-drupal</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-empire\"></em>fa-empire</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-facebook\"></em>fa-facebook</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-facebook-square\"></em>fa-facebook-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-flickr\"></em>fa-flickr</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-foursquare\"></em>fa-foursquare</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-ge\"></em>fa-ge\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-git\"></em>fa-git</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-git-square\"></em>fa-git-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-github\"></em>fa-github</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-github-alt\"></em>fa-github-alt</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-github-square\"></em>fa-github-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-gittip\"></em>fa-gittip</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-google\"></em>fa-google</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-google-plus\"></em>fa-google-plus</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-google-plus-square\"></em>fa-google-plus-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-google-wallet\"></em>fa-google-wallet</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-hacker-news\"></em>fa-hacker-news</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-html5\"></em>fa-html5</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-instagram\"></em>fa-instagram</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-ioxhost\"></em>fa-ioxhost</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-joomla\"></em>fa-joomla</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-jsfiddle\"></em>fa-jsfiddle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-lastfm\"></em>fa-lastfm</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-lastfm-square\"></em>fa-lastfm-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-linkedin\"></em>fa-linkedin</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-linkedin-square\"></em>fa-linkedin-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-linux\"></em>fa-linux</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-maxcdn\"></em>fa-maxcdn</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-meanpath\"></em>fa-meanpath</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-openid\"></em>fa-openid</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-pagelines\"></em>fa-pagelines</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-paypal\"></em>fa-paypal</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-pied-piper\"></em>fa-pied-piper</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-pied-piper-alt\"></em>fa-pied-piper-alt</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-pinterest\"></em>fa-pinterest</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-pinterest-square\"></em>fa-pinterest-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-qq\"></em>fa-qq</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-ra\"></em>fa-ra\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-rebel\"></em>fa-rebel</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-reddit\"></em>fa-reddit</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-reddit-square\"></em>fa-reddit-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-renren\"></em>fa-renren</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-share-alt\"></em>fa-share-alt</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-share-alt-square\"></em>fa-share-alt-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-skype\"></em>fa-skype</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-slack\"></em>fa-slack</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-slideshare\"></em>fa-slideshare</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-soundcloud\"></em>fa-soundcloud</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-spotify\"></em>fa-spotify</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-stack-exchange\"></em>fa-stack-exchange</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-stack-overflow\"></em>fa-stack-overflow</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-steam\"></em>fa-steam/a</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-steam-square\"></em>fa-steam-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-stumbleupon\"></em>fa-stumbleupon</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-stumbleupon-circle\"></em>fa-stumbleupon-circle</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-tencent-weibo\"></em>fa-tencent-weibo</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-trello\"></em>fa-trello</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-tumblr\"></em>fa-tumblr</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-tumblr-square\"></em>fa-tumblr-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-twitch\"></em>fa-twitch</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-twitter\"></em>fa-twitter</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-twitter-square\"></em>fa-twitter-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-vimeo-square\"></em>fa-vimeo-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-vine\"></em>fa-vine</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-vk\"></em>fa-vk</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-wechat\"></em>fa-wechat\r\n                <span class=\"text-muted\">(alias)</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-weibo\"></em>fa-weibo</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-weixin\"></em>fa-weixin</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-windows\"></em>fa-windows</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-wordpress\"></em>fa-wordpress</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-xing\"></em>fa-xing</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-xing-square\"></em>fa-xing-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-yahoo\"></em>fa-yahoo</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-yelp\"></em>fa-yelp</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-youtube\"></em>fa-youtube</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-youtube-play\"></em>fa-youtube-play</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-youtube-square\"></em>fa-youtube-square</div>\r\n        </div>\r\n    </section>\r\n    <section id=\"medical\">\r\n        <h4 class=\"page-header\">Medical Icons</h4>\r\n        <div class=\"row list-icon\">\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-ambulance\"></em>fa-ambulance</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-h-square\"></em>fa-h-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-hospital-o\"></em>fa-hospital-o</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-medkit\"></em>fa-medkit</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-plus-square\"></em>fa-plus-square</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-stethoscope\"></em>fa-stethoscope</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-user-md\"></em>fa-user-md</div>\r\n            <div class=\"col-md-3 col-sm-4\">\r\n                <em class=\"fa fa-wheelchair\"></em>fa-wheelchair</div>\r\n        </div>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/elements/iconsfont/iconsfont.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/routes/elements/iconsfont/iconsfont.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/iconsfont/iconsfont.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/elements/iconsfont/iconsfont.component.ts ***!
  \******************************************************************/
/*! exports provided: IconsfontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsfontComponent", function() { return IconsfontComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsfontComponent = /** @class */ (function () {
    function IconsfontComponent() {
    }
    IconsfontComponent.prototype.ngOnInit = function () {
    };
    IconsfontComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iconsfont',
            template: __webpack_require__(/*! ./iconsfont.component.html */ "./src/app/routes/elements/iconsfont/iconsfont.component.html"),
            styles: [__webpack_require__(/*! ./iconsfont.component.scss */ "./src/app/routes/elements/iconsfont/iconsfont.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsfontComponent);
    return IconsfontComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/iconsweather/iconsweather.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/routes/elements/iconsweather/iconsweather.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Weather Icons\r\n    <small>Weather themed icons, ready to be dropped right into your project.</small>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"lead mt-lg\">Daytime</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-sunny\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi.wi-day-sunny</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-cloudy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi.wi-day-cloudy</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-cloudy-gusts\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi.wi-day-cloudy-gusts</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-cloudy-windy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi.wi-day-cloudy-windy</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-fog\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi.wi-day-fog</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-hail\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi.wi-day-hail</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-haze\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-haze</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-lightning\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-lightning</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-rain\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-rain</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-rain-mix\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-rain-mix</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-rain-wind\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-rain-wind</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-showers\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-showers</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-sleet\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-sleet</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-sleet-storm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-sleet-storm</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-snow\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-snow</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-snow-thunderstorm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-snow-thunderstorm</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-snow-wind\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-snow-wind</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-sprinkle\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-sprinkle</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-storm-showers\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-storm-showers</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-sunny-overcast\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-sunny-overcast</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-thunderstorm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-thunderstorm</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-windy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-windy</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-solar-eclipse\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-solar-eclipse</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-hot\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-hot</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-cloudy-high\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-cloudy-high</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-day-light-wind\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-day-light-wind</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"lead mt-lg\">Nighttime</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-clear\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-clear</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-cloudy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-cloudy</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-cloudy-gusts\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-cloudy-gusts</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-cloudy-windy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-cloudy-windy</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-hail\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-hail</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-lightning\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-lightning</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-rain\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-rain</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-rain-mix\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-rain-mix</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-rain-wind\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-rain-wind</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-showers\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-showers</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-sleet\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-sleet</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-sleet-storm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-sleet-storm</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-snow\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-snow</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-snow-thunderstorm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-snow-thunderstorm</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-snow-wind\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-snow-wind</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-sprinkle\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-sprinkle</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-storm-showers\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-storm-showers</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-thunderstorm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-thunderstorm</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-cloudy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-cloudy</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-cloudy-gusts\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-cloudy-gusts</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-cloudy-windy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-cloudy-windy</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-fog\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-fog</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-hail\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-hail</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-lightning\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-lightning</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-partly-cloudy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-partly-cloudy</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-rain\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-rain</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-rain-mix\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-rain-mix</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-rain-wind\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-rain-wind</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-showers\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-showers</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-sleet\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-sleet</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-sleet-storm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-sleet-storm</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-snow\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-snow</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-snow-thunderstorm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-snow-thunderstorm</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-snow-wind\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-snow-wind</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-sprinkle\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-sprinkle</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-storm-showers\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-storm-showers</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-thunderstorm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-thunderstorm</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-lunar-eclipse\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-lunar-eclipse</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-stars\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-stars</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-storm-showers\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-storm-showers</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-thunderstorm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-thunderstorm</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-cloudy-high\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-cloudy-high</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-cloudy-high\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-cloudy-high</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-night-alt-partly-cloudy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-night-alt-partly-cloudy</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"lead mt-lg\">Neutral</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-cloud\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-cloud</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-cloudy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-cloudy</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-cloudy-gusts\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-cloudy-gusts</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-cloudy-windy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-cloudy-windy</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-fog\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-fog</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-hail\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-hail</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-rain\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-rain</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-rain-mix\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-rain-mix</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-rain-wind\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-rain-wind</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-showers\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-showers</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-sleet\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-sleet</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-snow\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-snow</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-sprinkle\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-sprinkle</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-storm-showers\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-storm-showers</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-thunderstorm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-thunderstorm</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-snow-wind\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-snow-wind</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-snow\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-snow</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-smog\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-smog</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-smoke\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-smoke</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-lightning\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-lightning</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-raindrops\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-raindrops</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-raindrop\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-raindrop</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-dust\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-dust</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-snowflake-cold\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-snowflake-cold</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-windy\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-windy</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-strong-wind\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-strong-wind</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-sandstorm\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-sandstorm</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-earthquake\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-earthquake</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-fire\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-fire</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-flood\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-flood</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-meteor\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-meteor</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-tsunami\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-tsunami</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-volcano\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-volcano</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-hurricane\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-hurricane</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-tornado\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-tornado</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-small-craft-advisory\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-small-craft-advisory</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-gale-warning\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-gale-warning</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-storm-warning\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-storm-warning</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-hurricane-warning\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-hurricane-warning</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-direction\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-direction</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"lead mt-lg\">Miscellaneous</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-alien\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-alien</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-celsius\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-celsius</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-fahrenheit\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-fahrenheit</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-degrees\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-degrees</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-thermometer\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-thermometer</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-thermometer-exterior\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-thermometer-exterior</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-thermometer-internal\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-thermometer-internal</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-cloud-down\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-cloud-down</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-cloud-up\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-cloud-up</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-cloud-refresh\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-cloud-refresh</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-horizon\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-horizon</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-horizon-alt\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-horizon-alt</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-sunrise\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-sunrise</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-sunset\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-sunset</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moonrise\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moonrise</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moonset\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moonset</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-refresh\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-refresh</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-refresh-alt\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-refresh-alt</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-umbrella\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-umbrella</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-barometer\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-barometer</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-humidity\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-humidity</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-na\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-na</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-train\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-train</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"lead mt-lg\">Moon Phases</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-new\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-new</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-crescent-1\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-crescent-1</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-crescent-2\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-crescent-2</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-crescent-3\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-crescent-3</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-crescent-4\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-crescent-4</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-crescent-5\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-crescent-5</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-crescent-6\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-crescent-6</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-first-quarter\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-first-quarter</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-gibbous-1\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-gibbous-1</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-gibbous-2\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-gibbous-2</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-gibbous-3\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-gibbous-3</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-gibbous-4\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-gibbous-4</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-gibbous-5\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-gibbous-5</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waxing-gibbous-6\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waxing-gibbous-6</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-full\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-full</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-gibbous-1\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-gibbous-1</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-gibbous-2\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-gibbous-2</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-gibbous-3\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-gibbous-3</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-gibbous-4\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-gibbous-4</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-gibbous-5\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-gibbous-5</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-gibbous-6\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-gibbous-6</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-third-quarter\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-third-quarter</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-crescent-1\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-crescent-1</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-crescent-2\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-crescent-2</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-crescent-3\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-crescent-3</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-crescent-4\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-crescent-4</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-crescent-5\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-crescent-5</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-waning-crescent-6\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-waning-crescent-6</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-new\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-new</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-crescent-1\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-crescent-1</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-crescent-2\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-crescent-2</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-crescent-3\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-crescent-3</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-crescent-4\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-crescent-4</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-crescent-5\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-crescent-5</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-crescent-6\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-crescent-6</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-first-quarter\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-first-quarter</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-gibbous-1\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-gibbous-1</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-gibbous-2\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-gibbous-2</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-gibbous-3\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-gibbous-3</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-gibbous-4\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-gibbous-4</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-gibbous-5\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-gibbous-5</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waxing-gibbous-6\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waxing-gibbous-6</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-full\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-full</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-gibbous-1\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-gibbous-1</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-gibbous-2\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-gibbous-2</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-gibbous-3\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-gibbous-3</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-gibbous-4\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-gibbous-4</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-gibbous-5\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-gibbous-5</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-gibbous-6\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-gibbous-6</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-third-quarter\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-third-quarter</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-crescent-1\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-crescent-1</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-crescent-2\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-crescent-2</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-crescent-3\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-crescent-3</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-crescent-4\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-crescent-4</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-crescent-5\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-crescent-5</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-moon-alt-waning-crescent-6\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-moon-alt-waning-crescent-6</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"lead mt-lg\">Time</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-1\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-1</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-2\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-2</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-3\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-3</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-4\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-4</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-5\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-5</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-6\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-6</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-7\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-7</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-8\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-8</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-9\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-9</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-10\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-10</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-11\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-11</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-time-12\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-time-12</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"lead mt-lg\">Directional Arrows</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-direction-up\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-direction-up</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-direction-up-right\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-direction-up-right</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-direction-right\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-direction-right</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-direction-down-right\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-direction-down-right</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-direction-down\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-direction-down</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-direction-down-left\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-direction-down-left</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-direction-left\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-direction-left</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-direction-up-left\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-direction-up-left</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"lead mt-lg\">Wind Degree Examples</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-0-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-0-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-23-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-23-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-45-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-45-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-68-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-68-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-90-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-90-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-113-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-113-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-135-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-135-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-158-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-158-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-180-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-180-deg</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-203-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-203-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-225-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-225-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-248-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-248-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-270-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-270-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-293-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-293-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-313-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-313-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind towards-336-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.towards-336-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-180-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-180-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-203-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-203-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-225-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-225-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-248-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-248-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-270-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-270-deg</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-293-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-293-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-313-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-313-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-336-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-336-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-0-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-0-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-23-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-23-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-45-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-45-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-68-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-68-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-90-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-90-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-113-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-113-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-135-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-135-deg</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind from-158-deg\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.from-158-deg</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"lead mt-lg\">Wind Cardinal Examples</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-n\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-n</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-nne\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-nne</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-ne\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-ne</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-ene\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-ene</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-e\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-e</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-ese\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-ese</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-se\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-se</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-sse\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-sse</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-s\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-s</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-ssw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-ssw</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-sw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-sw</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-wsw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-wsw</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-w\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-w</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-wnw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-wnw</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-nw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-nw</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-towards-nnw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-towards-nnw</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-n\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-n</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-nne\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-nne</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-ne\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-ne</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-ene\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-ene</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-e\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-e</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-ese\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-ese</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-se\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-se</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-sse\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-sse</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-s\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-s</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-ssw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-ssw</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-sw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-sw</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-wsw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-wsw</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-w\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-w</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-wnw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-wnw</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-nw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-nw</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind wi-from-nnw\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind.wi-from-nnw</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"lead mt-lg\">Beaufort Wind Scale</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-0\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-0</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-1\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-1</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-2\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-2</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-3\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-3</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-4\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-4</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-5\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-5</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-6\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-6</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-7\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-7</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-8\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-8</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-9\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-9</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-10\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-10</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-11\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-11</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1 text-md\"><i class=\"wi wi-wind-beaufort-12\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-11\">.wi-wind-beaufort-12</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/elements/iconsweather/iconsweather.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/routes/elements/iconsweather/iconsweather.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/iconsweather/iconsweather.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/elements/iconsweather/iconsweather.component.ts ***!
  \************************************************************************/
/*! exports provided: IconsweatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsweatherComponent", function() { return IconsweatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsweatherComponent = /** @class */ (function () {
    function IconsweatherComponent() {
    }
    IconsweatherComponent.prototype.ngOnInit = function () {
    };
    IconsweatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iconsweather',
            template: __webpack_require__(/*! ./iconsweather.component.html */ "./src/app/routes/elements/iconsweather/iconsweather.component.html"),
            styles: [__webpack_require__(/*! ./iconsweather.component.scss */ "./src/app/routes/elements/iconsweather/iconsweather.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsweatherComponent);
    return IconsweatherComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/infinitescroll/infinitescroll.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/routes/elements/infinitescroll/infinitescroll.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Infinite Scroll\r\n    <small>Total items: {{sum + sum2}}</small>\r\n</div>\r\n<h4>Scroll in element</h4>\r\n<div style=\"height: 320px; overflow-y: auto;\" infinite-scroll [infiniteScrollDistance]=\"2\" [scrollWindow]=\"false\" (scrolled)=\"onScrollDown()\">\r\n    <div class=\"col-sm-2 col-xs-3 mb\" *ngFor=\"let i of array\">\r\n        <div class=\"alert alert-info text-center\">Item #{{i}}</div>\r\n    </div>\r\n</div>\r\n<h4>Page scroll</h4>\r\n<div infinite-scroll [infiniteScrollDistance]=\"1\" (scrolled)=\"onScrollDown2()\">\r\n    <div class=\"col-sm-2 col-xs-3 mb\" *ngFor=\"let i of array2\">\r\n        <div class=\"alert alert-purple text-center\">\r\n            <h2 class=\"mv-lg\">{{i}}</h2>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/elements/infinitescroll/infinitescroll.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/routes/elements/infinitescroll/infinitescroll.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/infinitescroll/infinitescroll.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/routes/elements/infinitescroll/infinitescroll.component.ts ***!
  \****************************************************************************/
/*! exports provided: InfinitescrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfinitescrollComponent", function() { return InfinitescrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfinitescrollComponent = /** @class */ (function () {
    function InfinitescrollComponent() {
        this.array = [];
        this.sum = 100;
        this.array2 = [];
        this.sum2 = 100;
        for (var i = 0; i < this.sum; ++i) {
            this.array.push(i);
        }
        for (var i = 0; i < this.sum2; ++i) {
            this.array2.push(i);
        }
    }
    InfinitescrollComponent.prototype.onScrollDown = function () {
        console.log('scrolled!!');
        // add another 20 items
        var start = this.sum;
        this.sum += 50;
        for (var i = start; i < this.sum; ++i) {
            this.array.push(i);
        }
    };
    InfinitescrollComponent.prototype.onScrollDown2 = function () {
        console.log('scrolled 2!!');
        // add another 20 items
        var start = this.sum2;
        this.sum2 += 50;
        for (var i = start; i < this.sum2; ++i) {
            this.array2.push(i);
        }
    };
    InfinitescrollComponent.prototype.onScrollUp = function () {
        console.log('scrolled up!!');
    };
    InfinitescrollComponent.prototype.ngOnInit = function () {
    };
    InfinitescrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infinitescroll',
            template: __webpack_require__(/*! ./infinitescroll.component.html */ "./src/app/routes/elements/infinitescroll/infinitescroll.component.html"),
            styles: [__webpack_require__(/*! ./infinitescroll.component.scss */ "./src/app/routes/elements/infinitescroll/infinitescroll.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfinitescrollComponent);
    return InfinitescrollComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/interaction/interaction.component.html":
/*!************************************************************************!*\
  !*** ./src/app/routes/elements/interaction/interaction.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Interaction\r\n    <small>Advanced bootstrap components for user interaction</small>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <h3 class=\"page-header mt0\">Carousel</h3>\r\n        <div>\r\n            <div>\r\n                <carousel [interval]=\"myInterval\" [noWrap]=\"false\">\r\n                    <slide *ngFor=\"let slidez of slides; let index=index\" [active]=\"slidez.active\">\r\n                        <img [src]=\"slidez.image\" class=\"img-responsive\">\r\n                        <div class=\"carousel-caption\">\r\n                            <h4>Slide {{index}}</h4>\r\n                            <p>{{slidez.text}}</p>\r\n                        </div>\r\n                    </slide>\r\n                </carousel>\r\n            </div>\r\n            <div class=\"row pv\">\r\n                <div class=\"col-lg-6\">\r\n                    <p>Interval, in milliseconds:</p>\r\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"myInterval\" />\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <p>Add a slide with a random image</p>\r\n                    <button class=\"btn btn-info\" type=\"button\" (click)=\"addSlide()\">Add Slide</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 typeahead-ctrl\">\r\n        <h3 class=\"page-header mt0\">Typeahead</h3>\r\n        <!-- Static arrays -->\r\n        <h4>Static arrays</h4>\r\n        <pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\r\n        <input [(ngModel)]=\"selected\" [typeahead]=\"states\" (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" class=\"form-control\">\r\n        <!-- Custom item template -->\r\n        <ng-template #customItemTemplate let-model=\"item\" let-index=\"index\">\r\n            <h5>This is: {{model | json}} Index: {{ index }}</h5>\r\n        </ng-template>\r\n        <h4>Custom item template</h4>\r\n        <pre class=\"card card-block card-header\">Model: {{customSelected | json}}</pre>\r\n        <input [(ngModel)]=\"customSelected\" [typeahead]=\"statesComplex\" [typeaheadItemTemplate]=\"customItemTemplate\" [typeaheadOptionField]=\"'name'\" (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" class=\"form-control\">\r\n        <!-- Asynchronous results -->\r\n        <h4>Asynchronous results</h4>\r\n        <pre class=\"card card-block card-header\">Model: {{asyncSelected | json}}</pre>\r\n        <input [(ngModel)]=\"asyncSelected\" [typeahead]=\"dataSource\" (typeaheadLoading)=\"changeTypeaheadLoading($event)\" (typeaheadNoResults)=\"changeTypeaheadNoResults($event)\" (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadOptionsLimit]=\"7\" [typeaheadOptionField]=\"'name'\" placeholder=\"Locations loaded with timeout\" class=\"form-control\">\r\n        <div *ngIf=\"typeaheadLoading===true\">\r\n            <i class=\"fa fa-refresh ng-hide\" style=\"\"></i>\r\n        </div>\r\n        <div *ngIf=\"typeaheadNoResults===true\" class=\"\" style=\"\">\r\n            <i class=\"fa fa-times\"></i> No Results Found\r\n        </div>\r\n        <!--Typeahead inside a form-->\r\n        <h4>Typeahead inside a form</h4>\r\n        <pre class=\"card card-block card-header\">Model: {{myForm.value.state | json}}</pre>\r\n        <form [formGroup]=\"myForm\">\r\n            <input formControlName=\"state\" [typeahead]=\"states\" (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadOptionsLimit]=\"7\" [typeaheadOptionField]=\"'name'\" [typeaheadMinLength]=\"0\" placeholder=\"Typeahead inside a form\" class=\"form-control\">\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <h3 class=\"page-header\">Calendar</h3>\r\n        <pre class=\"card card-block card-header\">Selected date is: <em *ngIf=\"dt\">{{ getDate() | date:'fullDate'}}</em></pre>\r\n        <h4>Inline</h4>\r\n        <div style=\"display:inline-block; min-height:290px;\">\r\n            <datepicker [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"true\"></datepicker>\r\n        </div>\r\n        <hr />\r\n        <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"today()\">Today</button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-default btn-secondary\" (click)=\"d20090824();\">2009-08-24</button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"clear()\">Clear</button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-default btn-secondary\" (click)=\"toggleMin()\" tooltip=\"After today restriction\">Min date</button>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <h3 class=\"page-header\">Time picker</h3>\r\n        <timepicker [(ngModel)]=\"mytime\" (change)=\"changed()\" [hourStep]=\"hstep\" [minuteStep]=\"mstep\" [showMeridian]=\"ismeridian\" [readonlyInput]=\"!isEnabled\"></timepicker>\r\n        <pre class=\"alert alert-info\">Time is: {{mytime}}</pre>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-6\">\r\n                Hours step is:\r\n                <select class=\"form-control\" [(ngModel)]=\"hstep\">\r\n                    <option *ngFor=\"let opt of options.hstep\" [value]=\"opt\">{{opt}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n                Minutes step is:\r\n                <select class=\"form-control\" [(ngModel)]=\"mstep\">\r\n                    <option *ngFor=\"let opt of options.mstep\" [value]=\"opt\">{{opt}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"toggleMode()\">12H / 24H</button>\r\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"isEnabled=!isEnabled\">Enable / Disable input</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"update()\">Set to 14:00</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"clearTP()\">Clear</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/elements/interaction/interaction.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/routes/elements/interaction/interaction.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/interaction/interaction.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/routes/elements/interaction/interaction.component.ts ***!
  \**********************************************************************/
/*! exports provided: InteractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionComponent", function() { return InteractionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InteractionComponent = /** @class */ (function () {
    // CONSTRUCTOR
    function InteractionComponent() {
        var _this = this;
        // CAROUSEL PROPS
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.slides = [];
        // TYPEAHEAD PROPS
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            state: this.stateCtrl
        });
        this.customSelected = '';
        this.selected = '';
        this.asyncSelected = '';
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
            'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico',
            'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];
        this.statesComplex = [
            { id: 1, name: 'Alabama' }, { id: 2, name: 'Alaska' }, { id: 3, name: 'Arizona' },
            { id: 4, name: 'Arkansas' }, { id: 5, name: 'California' },
            { id: 6, name: 'Colorado' }, { id: 7, name: 'Connecticut' },
            { id: 8, name: 'Delaware' }, { id: 9, name: 'Florida' },
            { id: 10, name: 'Georgia' }, { id: 11, name: 'Hawaii' },
            { id: 12, name: 'Idaho' }, { id: 13, name: 'Illinois' },
            { id: 14, name: 'Indiana' }, { id: 15, name: 'Iowa' },
            { id: 16, name: 'Kansas' }, { id: 17, name: 'Kentucky' },
            { id: 18, name: 'Louisiana' }, { id: 19, name: 'Maine' },
            { id: 21, name: 'Maryland' }, { id: 22, name: 'Massachusetts' },
            { id: 23, name: 'Michigan' }, { id: 24, name: 'Minnesota' },
            { id: 25, name: 'Mississippi' }, { id: 26, name: 'Missouri' },
            { id: 27, name: 'Montana' }, { id: 28, name: 'Nebraska' },
            { id: 29, name: 'Nevada' }, { id: 30, name: 'New Hampshire' },
            { id: 31, name: 'New Jersey' }, { id: 32, name: 'New Mexico' },
            { id: 33, name: 'New York' }, { id: 34, name: 'North Dakota' },
            { id: 35, name: 'North Carolina' }, { id: 36, name: 'Ohio' },
            { id: 37, name: 'Oklahoma' }, { id: 38, name: 'Oregon' },
            { id: 39, name: 'Pennsylvania' }, { id: 40, name: 'Rhode Island' },
            { id: 41, name: 'South Carolina' }, { id: 42, name: 'South Dakota' },
            { id: 43, name: 'Tennessee' }, { id: 44, name: 'Texas' },
            { id: 45, name: 'Utah' }, { id: 46, name: 'Vermont' },
            { id: 47, name: 'Virginia' }, { id: 48, name: 'Washington' },
            { id: 49, name: 'West Virginia' }, { id: 50, name: 'Wisconsin' },
            { id: 51, name: 'Wyoming' }
        ];
        // CALENDAR PROPS
        this.dt = new Date();
        this.minDate = void 0;
        this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
        this.format = this.formats[0];
        this.dateOptions = {
            formatYear: 'YY',
            startingDay: 1
        };
        this.opened = false;
        // TIMEPICKER PROPS
        this.hstep = 1;
        this.mstep = 15;
        this.ismeridian = true;
        this.isEnabled = true;
        this.mytime = new Date();
        this.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };
        // init carousel
        this.addSlide(4);
        this.addSlide(7);
        this.addSlide(8);
        // init typeahead
        this.dataSource = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            // Runs on every search
            observer.next(_this.asyncSelected);
        }).mergeMap(function (token) { return _this.getStatesAsObservable(token); });
        // init calendar
        (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
        (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
        (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
        this.events = [
            { date: this.tomorrow, status: 'full' },
            { date: this.afterTomorrow, status: 'partially' }
        ];
    }
    InteractionComponent.prototype.ngOnInit = function () { };
    // CAROUSEL METHODS
    InteractionComponent.prototype.addSlide = function (id) {
        if (id === void 0) { id = 8; }
        this.slides.push({
            image: 'assets/img/bg' + id + '.jpg',
            text: ['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4] + "\n      " + ['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]
        });
    };
    // TYPEAHEAD METHODS
    InteractionComponent.prototype.getStatesAsObservable = function (token) {
        var query = new RegExp(token, 'ig');
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(this.statesComplex.filter(function (state) {
            return query.test(state.name);
        }));
    };
    InteractionComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    InteractionComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    InteractionComponent.prototype.typeaheadOnSelect = function (e) {
        console.log('Selected value: ', e.item);
    };
    // CALENDAR METHODS
    InteractionComponent.prototype.getDate = function () {
        return this.dt && this.dt.getTime() || new Date().getTime();
    };
    InteractionComponent.prototype.today = function () {
        this.dt = new Date();
    };
    InteractionComponent.prototype.d20090824 = function () {
        this.dt = moment__WEBPACK_IMPORTED_MODULE_4__('2009-08-24', 'YYYY-MM-DD').toDate();
    };
    // todo: implement custom class cases
    InteractionComponent.prototype.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
            for (var i = 0; i < this.events.length; i++) {
                var currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);
                if (dayToCheck === currentDay) {
                    return this.events[i].status;
                }
            }
        }
        return '';
    };
    InteractionComponent.prototype.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };
    InteractionComponent.prototype.open = function () {
        this.opened = !this.opened;
    };
    InteractionComponent.prototype.clear = function () {
        this.dt = void 0;
    };
    InteractionComponent.prototype.toggleMin = function () {
        this.dt = new Date(this.minDate.valueOf());
    };
    // TIMEPICKER METHODS
    InteractionComponent.prototype.toggleMode = function () {
        this.ismeridian = !this.ismeridian;
    };
    ;
    InteractionComponent.prototype.update = function () {
        var d = new Date();
        d.setHours(14);
        d.setMinutes(0);
        this.mytime = d;
    };
    ;
    InteractionComponent.prototype.changed = function () {
        console.log('Time changed to: ' + this.mytime);
    };
    ;
    InteractionComponent.prototype.clearTP = function () {
        this.mytime = void 0;
    };
    ;
    InteractionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interaction',
            template: __webpack_require__(/*! ./interaction.component.html */ "./src/app/routes/elements/interaction/interaction.component.html"),
            styles: [__webpack_require__(/*! ./interaction.component.scss */ "./src/app/routes/elements/interaction/interaction.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InteractionComponent);
    return InteractionComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/navtree/navtree.component.html":
/*!****************************************************************!*\
  !*** ./src/app/routes/elements/navtree/navtree.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Angular Tree\r\n    <small>A simple yet powerful tree component for Angular</small>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4 col-sm-6 col-lg-push-3 col-sm-push-6\">\r\n            <div class=\"well wd-wide\">\r\n                <form>\r\n                    <input class=\"form-control\" #filter (keyup)=\"filterNodes(filter.value, tree)\" placeholder=\"filter nodes\" />\r\n                </form>\r\n                <tree-root #tree [nodes]=\"nodes\" [focused]=\"true\" [options]=\"customTemplateStringOptions\" (onEvent)=\"onEvent($event)\">\r\n                    <ng-template #treeNodeTemplate let-node>\r\n                        <span title=\"{{node.data.subTitle}}\">{{ node.data.name }}</span>\r\n                        <span class=\"pull-right\">{{ childrenCount(node) }}</span>\r\n                        <button class=\"btn btn-default btn-xs\" (click)=\"go($event)\"><em class=\"fa fa-exclamation text-muted\"></em></button>\r\n                    </ng-template>\r\n                    <ng-template #loadingTemplate>Loading, please hold....</ng-template>\r\n                </tree-root>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-sm-6 col-lg-pull-4 col-sm-pull-6\">\r\n            <h5>Tree Control API:</h5>\r\n            <div class=\"btn-group btn-group-justified mb\">\r\n                <a class=\"btn btn-default\" (click)=\"tree.treeModel.focusNextNode()\">next node</a>\r\n                <a class=\"btn btn-default\" (click)=\"tree.treeModel.focusPreviousNode()\">previous node</a>\r\n            </div>\r\n            <div class=\"btn-group btn-group-justified mb\">\r\n                <a class=\"btn btn-default\" (click)=\"tree.treeModel.focusDrillDown()\">drill down</a>\r\n                <a class=\"btn btn-default\" (click)=\"tree.treeModel.focusDrillUp()\">drill up</a>\r\n            </div>\r\n            <div class=\"btn-group btn-group-justified mb\">\r\n                <a class=\"btn btn-default\" [class.disabled]=\"!tree.treeModel.getFocusedNode()\" (click)=\"tree.treeModel.getFocusedNode().toggleActivated()\">\r\n                    {{ tree.treeModel.getFocusedNode()?.isActive ? 'deactivate' : 'activate' }}\r\n                </a>\r\n                <a class=\"btn btn-default\" [class.disabled]=\"!tree.treeModel.getFocusedNode()\" (click)=\"tree.treeModel.getFocusedNode().toggleExpanded()\">\r\n                    {{ tree.treeModel.getFocusedNode()?.isExpanded ? 'collapse' : 'expand' }}\r\n                </a>\r\n            </div>\r\n            <div class=\"btn-group btn-group-justified mb\">\r\n                <a class=\"btn btn-default\" [class.disabled]=\"!tree.treeModel.getFocusedNode()\" (click)=\"tree.treeModel.getFocusedNode().blur()\">\r\n                    blur\r\n                </a>\r\n                <a class=\"btn btn-default\" (click)=\"addNode(tree)\">\r\n                    Add Node\r\n                </a>\r\n            </div>\r\n            <a class=\"btn btn-default btn-block\" (click)=\"activateSubSub(tree)\">\r\n                Activate inner node\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/elements/navtree/navtree.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/routes/elements/navtree/navtree.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tree-children.tree-children-no-padding { padding-left: 0 }\n.tree-children { padding-left: 20px; overflow: hidden }\n.node-drop-slot { display: block; height: 2px }\n.node-drop-slot.is-dragging-over { background: #ddffee; height: 20px; border: 2px dotted #888; }\n.toggle-children-wrapper-expanded .toggle-children { -webkit-transform: rotate(90deg); transform: rotate(90deg) }\n.toggle-children-wrapper-collapsed .toggle-children { -webkit-transform: rotate(0); transform: rotate(0); }\n.toggle-children-wrapper {\n  padding: 2px 3px 5px 1px;\n}\n/* tslint:disable */\n.toggle-children {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC');\n  height: 8px;\n  width: 9px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  top: 1px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.toggle-children-placeholder {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  position: relative;\n  top: 1px;\n  padding-right: 3px;\n}\n.node-content-wrapper {\n  display: inline-block;\n  padding: 2px 5px;\n  border-radius: 2px;\n  transition: background-color .15s,box-shadow .15s;\n}\n.node-wrapper {display: flex; align-items: flex-start;}\n.node-content-wrapper-active,\n.node-content-wrapper.node-content-wrapper-active:hover,\n.node-content-wrapper-active.node-content-wrapper-focused {\n  background: #beebff;\n}\n.node-content-wrapper-focused { background: #e7f4f9 }\n.node-content-wrapper:hover { background: #f7fbff }\n.node-content-wrapper-active, .node-content-wrapper-focused, .node-content-wrapper:hover {\n  box-shadow: inset 0 0 1px #999;\n}\n.node-content-wrapper.is-dragging-over { background: #ddffee; box-shadow: inset 0 0 1px #999; }\n.node-content-wrapper.is-dragging-over-disabled { opacity: 0.5 }\ntree-viewport {\n  height: 100%;\n  overflow: auto;\n  display: block;\n}\n.tree-children { padding-left: 20px }\n.empty-tree-drop-slot .node-drop-slot { height: 20px; min-width: 100px }\n.angular-tree-component {\n  width: 100%;\n  position:relative;\n  display: inline-block;\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none;   /* Chrome/Safari/Opera */    /* Konqueror */\n  -moz-user-select: none;      /* Firefox */\n  -ms-user-select: none;       /* IE/Edge */\n  user-select: none;           /* non-prefixed version, currently not supported by any browser */\n}\ntree-root .angular-tree-component-rtl {\n  direction: rtl;\n}\ntree-root .angular-tree-component-rtl .toggle-children-wrapper-collapsed .toggle-children {\n  -webkit-transform: rotate(180deg) !important;\n          transform: rotate(180deg) !important;\n}\ntree-root .angular-tree-component-rtl .tree-children {\n  padding-right: 20px;\n  padding-left: 0;\n}\ntree-node-checkbox {\n  padding: 1px;\n}\n"

/***/ }),

/***/ "./src/app/routes/elements/navtree/navtree.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/elements/navtree/navtree.component.ts ***!
  \**************************************************************/
/*! exports provided: NavtreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavtreeComponent", function() { return NavtreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var actionMapping = {
    mouse: {
        contextMenu: function (tree, node, $event) {
            $event.preventDefault();
            alert("context menu for " + node.data.name);
        },
        dblClick: angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_EXPANDED,
        click: function (tree, node, $event) {
            $event.shiftKey
                ? angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(tree, node, $event)
                : angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_ACTIVE(tree, node, $event);
        }
    },
    keys: (_a = {},
        _a[angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["KEYS"].ENTER] = function (tree, node, $event) { return alert("This is " + node.data.name); },
        _a)
};
var NavtreeComponent = /** @class */ (function () {
    function NavtreeComponent() {
        var _this = this;
        this.nodes = null;
        this.asyncChildren = [
            {
                name: 'child2.1',
                subTitle: 'new and improved'
            }, {
                name: 'child2.2',
                subTitle: 'new and improved2'
            }
        ];
        this.customTemplateStringOptions = {
            // displayField: 'subTitle',
            isExpandedField: 'expanded',
            idField: 'uuid',
            getChildren: this.getChildren.bind(this),
            actionMapping: actionMapping,
            allowDrag: true
        };
        setTimeout(function () {
            _this.nodes = [
                {
                    expanded: true,
                    name: 'root expanded',
                    subTitle: 'the root',
                    children: [
                        {
                            name: 'child1',
                            subTitle: 'a good child',
                            hasChildren: false
                        }, {
                            name: 'child2',
                            subTitle: 'a bad child',
                            hasChildren: false
                        }
                    ]
                },
                {
                    name: 'root2',
                    subTitle: 'the second root',
                    children: [
                        {
                            name: 'child2.1',
                            subTitle: 'new and improved',
                            hasChildren: false
                        }, {
                            name: 'child2.2',
                            subTitle: 'new and improved2',
                            children: [
                                {
                                    uuid: 1001,
                                    name: 'subsub',
                                    subTitle: 'subsub',
                                    hasChildren: false
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'asyncroot',
                    hasChildren: true
                }
            ];
        }, 1);
    }
    NavtreeComponent.prototype.onEvent = function (msg) {
        console.log(msg);
    };
    NavtreeComponent.prototype.ngOnInit = function () {
    };
    NavtreeComponent.prototype.getChildren = function (node) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.asyncChildren.map(function (c) {
                return Object.assign({}, c, {
                    hasChildren: node.level < 5
                });
            })); }, 1000);
        });
    };
    NavtreeComponent.prototype.addNode = function (tree) {
        this.nodes[0].children.push({
            name: 'a new child'
        });
        tree.treeModel.update();
    };
    NavtreeComponent.prototype.childrenCount = function (node) {
        return node && node.children ? "(" + node.children.length + ")" : '';
    };
    NavtreeComponent.prototype.filterNodes = function (text, tree) {
        tree.treeModel.filterNodes(text, true);
    };
    NavtreeComponent.prototype.activateSubSub = function (tree) {
        // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    };
    NavtreeComponent.prototype.go = function ($event) {
        $event.stopPropagation();
        alert('this method is on the app component');
    };
    NavtreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navtree',
            template: __webpack_require__(/*! ./navtree.component.html */ "./src/app/routes/elements/navtree/navtree.component.html"),
            styles: [__webpack_require__(/*! ./navtree.component.scss */ "./src/app/routes/elements/navtree/navtree.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NavtreeComponent);
    return NavtreeComponent;
}());

var _a;


/***/ }),

/***/ "./src/app/routes/elements/notification/notification.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/routes/elements/notification/notification.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    <!-- Breadcrumb right aligned-->\r\n    <ul class=\"breadcrumb pull-right\">\r\n        <li><a href=\"#\">Home</a>\r\n        </li>\r\n        <li><a href=\"#\">Elements</a>\r\n        </li>\r\n        <li class=\"active\">Notifications</li>\r\n    </ul>Notifications\r\n    <!-- Small text for title-->\r\n    <span class=\"text-sm hidden-xs\">A complete set of notification posibilities</span>\r\n    <!-- Breadcrumb below title-->\r\n    <ul class=\"breadcrumb\">\r\n        <li><a href=\"#\">Home</a>\r\n        </li>\r\n        <li><a href=\"#\">Elements</a>\r\n        </li>\r\n        <li class=\"active\">Notifications</li>\r\n    </ul>\r\n</div>\r\n<!-- Breadcrumb next to view title-->\r\n<ul class=\"breadcrumb\">\r\n    <li><a href=\"#\">Home</a>\r\n    </li>\r\n    <li><a href=\"#\">Elements</a>\r\n    </li>\r\n    <li class=\"active\">Notifications</li>\r\n</ul>\r\n<ul class=\"breadcrumb\">\r\n    <li><a href=\"#\">Home</a>\r\n    </li>\r\n    <li><a href=\"#\">Elements</a>\r\n    </li>\r\n    <li class=\"active\">Notifications</li>\r\n</ul>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Toaster notifications for Angular</div>\r\n    <div class=\"panel-body\">\r\n        <toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"form-group\">\r\n                    <label>Title</label>\r\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter a title...\" [(ngModel)]=\"toaster.title\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Message</label>\r\n                    <textarea class=\"form-control\" placeholder=\"Enter a message\" rows=\"5\" [(ngModel)]=\"toaster.text\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <!-- icon-classes: .toast-error,.toast-info,.toast-wait,.toast-success,.toast-warning-->\r\n                        <label>Toast Type</label>\r\n                        <div class=\"radio c-radio\">\r\n                            <label>\r\n                                <input type=\"radio\" name=\"toasts\" [(ngModel)]=\"toaster.type\" value=\"success\" />\r\n                                <span class=\"fa fa-circle\"></span>Success</label>\r\n                        </div>\r\n                        <div class=\"radio c-radio\">\r\n                            <label>\r\n                                <input type=\"radio\" name=\"toasts\" [(ngModel)]=\"toaster.type\" value=\"info\" />\r\n                                <span class=\"fa fa-circle\"></span>Info</label>\r\n                        </div>\r\n                        <div class=\"radio c-radio\">\r\n                            <label>\r\n                                <input type=\"radio\" name=\"toasts\" [(ngModel)]=\"toaster.type\" value=\"wait\" />\r\n                                <span class=\"fa fa-circle\"></span>Wait</label>\r\n                        </div>\r\n                        <div class=\"radio c-radio\">\r\n                            <label>\r\n                                <input type=\"radio\" name=\"toasts\" [(ngModel)]=\"toaster.type\" value=\"warning\" />\r\n                                <span class=\"fa fa-circle\"></span>Warning</label>\r\n                        </div>\r\n                        <div class=\"radio c-radio\">\r\n                            <label>\r\n                                <input type=\"radio\" name=\"toasts\" [(ngModel)]=\"toaster.type\" value=\"error\" />\r\n                                <span class=\"fa fa-circle\"></span>Error</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button class=\"btn btn-info\" (click)=\"pop()\">Show a Toaster</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Alert Styles</div>\r\n            <div class=\"panel-body\">\r\n                <alert type=\"success\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a class=\"alert-link\" href=\"#\">Alert Link</a>\r\n                </alert>\r\n                <alert type=\"info\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a class=\"alert-link\" href=\"#\">Alert Link</a>\r\n                </alert>\r\n                <div>\r\n                    <alert *ngFor=\"let alert of alerts;let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\r\n                        {{ alert?.msg }}\r\n                    </alert>\r\n                    <button type=\"button\" class='btn btn-primary' (click)=\"addAlert()\">Add Alert</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Progress Bar\r\n                <div class=\"btn-group pull-right\">\r\n                    <button type=\"button\" class=\"btn btn-xs btn-primary\" (click)=\"randomStacked()\">Stacked</button>\r\n                    <button type=\"button\" class=\"btn btn-xs btn-primary\" (click)=\"random()\">Randomize</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <h4>Static</h4>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <progressbar value=\"55\"></progressbar>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <progressbar class=\"progress-striped\" value=\"22\" type=\"warning\">22%</progressbar>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <progressbar class=\"progress-striped active\" max=\"200\" value=\"166\" type=\"danger\"><i>166 / 200</i></progressbar>\r\n                    </div>\r\n                </div>\r\n                <h4>Dynamic</h4>\r\n                <progressbar [max]=\"max\" [value]=\"dynamic\"><span style=\"color:white; white-space:nowrap;\">{{dynamic}} / {{max}}</span>\r\n                </progressbar>\r\n                <small><em>No animation</em></small>\r\n                <progressbar [animate]=\"false\" [value]=\"dynamic\" type=\"success\"><b>{{dynamic}}%</b></progressbar>\r\n                <small><em>Object (changes type based on value)</em></small>\r\n                <progressbar class=\"progress-striped active\" [value]=\"dynamic\" [type]=\"type\">{{type}} <i *ngIf=\"showWarning\">!!! Watch out !!!</i></progressbar>\r\n                <h4>Stacked</h4>\r\n                <progressbar class=\"progress\" [value]=\"stacked\" [max]=\"100\"></progressbar>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Modals</div>\r\n            <div class=\"panel-body\">\r\n                <!-- CLassic modal -->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"classicModal.show()\">Classc modal</button>\r\n                <!-- Small modal -->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"smModal.show()\">Small modal</button>\r\n                <!-- Small modal -->\r\n                <div bsModal #smModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n                    <div class=\"modal-dialog modal-sm\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"smModal.hide()\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                                <h4 class=\"modal-title\">Small modal</h4>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                ...\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Classc modal -->\r\n                <div class=\"modal fade\" bsModal #classicModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n                    <div class=\"modal-dialog modal-sm\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"classicModal.hide()\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                                <h4 class=\"modal-title\">Classic modal</h4>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ratings</div>\r\n            <div class=\"panel-body\">\r\n                <h4>Default</h4>\r\n                <rating [(ngModel)]=\"rate\" [max]=\"maxRat\" [readonly]=\"isReadonly\"\r\n                        (onHover)=\"hoveringOver($event)\" (onLeave)=\"resetStar()\" [titles]=\"['one','two','three']\"\r\n                        stateOn=\"fa fa-star text-yellow\" stateOff=\"fa fa-star-o\"></rating>\r\n                <span class=\"label\" [ngClass]=\"{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}\" [ngStyle]=\"{display: (overStar && !isReadonly) ? 'inline' : 'none'}\">{{percent}}%</span>\r\n                <pre class=\"card card-block card-header\" style=\"margin:15px 0;\">Rate: <b>{{rate}}</b> - Readonly is: <i>{{isReadonly}}</i> - Hovering over: <b>{{overStar || \"none\"}}</b></pre>\r\n                <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"rate = 0\" [disabled]=\"isReadonly\">Clear\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"isReadonly = ! isReadonly\">Toggle Readonly\r\n                </button>\r\n                <hr/>\r\n                <h4>Custom icons</h4>\r\n                <div>\r\n                  <rating [max]=\"10\" [(ngModel)]=\"x\" [customTemplate]=\"t\" style=\"color: #0275d8;font-size: 20px;\"></rating>\r\n                  <b>(<i>Rate:</i> {{x}})</b>\r\n                  <ng-template #t let-index=\"index\" let-value=\"value\">{{index < value ? '&#9745;' : '&#9744;'}}</ng-template>\r\n                </div>\r\n                <div>\r\n                  <rating [max]=\"10\" [(ngModel)]=\"y\" [customTemplate]=\"tt\"></rating>\r\n                  <b>(<i>Rate:</i> {{y}})</b>\r\n                  <ng-template #tt let-i=\"index\" let-v=\"value\">\r\n                    <button class=\"btn btn-{{i < v ? 'warning' : 'default'}}\">\r\n                      {{i < v ? '&#9733;' : '&#9734;'}}\r\n                    </button>\r\n                  </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t    <div class=\"panel-heading\">Popovers</div>\r\n\t\t    <div class=\"panel-body\">\r\n\t\t        <button type=\"button\" class=\"btn btn-primary mb-lg\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\r\n\t\t            Live demo\r\n\t\t        </button>\r\n\t\t        <p class=\"text-bold\">Four directions</p>\r\n\t\t        <button type=\"button\" class=\"btn btn-default mr mb\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\" placement=\"top\" container=\"body\">\r\n\t\t            Popover on top\r\n\t\t        </button>\r\n\t\t        <button type=\"button\" class=\"btn btn-default mr mb\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\" placement=\"right\" container=\"body\">\r\n\t\t            Popover on right\r\n\t\t        </button>\r\n\t\t        <button type=\"button\" class=\"btn btn-default mr mb\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover auto\" placement=\"auto\" container=\"body\">\r\n\t\t            Popover auto\r\n\t\t        </button>\r\n\t\t        <button type=\"button\" class=\"btn btn-default mr mb\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\" placement=\"left\" container=\"body\">\r\n\t\t            Popover on left\r\n\t\t        </button>\r\n\t\t        <button type=\"button\" class=\"btn btn-default mb\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\" placement=\"bottom\">\r\n\t\t            Popover on bottom\r\n\t\t        </button>\r\n\t\t    </div>\r\n\t\t</div>\r\n    </div>\r\n</div>\r\n<!-- START panel-->\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Tooltips</div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"form-group\">\r\n            <label>Dynamic Tooltip Text</label>\r\n            <input type=\"text\" [(ngModel)]=\"dynamicTooltipText\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Dynamic Tooltip Popup Text</label>\r\n            <input type=\"text\" [(ngModel)]=\"dynamicTooltip\" class=\"form-control\">\r\n        </div>\r\n        <p>\r\n            Pellentesque <a href=\"#\" [tooltip]=\"dynamicTooltip\">{{dynamicTooltipText}}</a>, sit amet venenatis urna cursus eget nunc scelerisque viverra mauris, in aliquam. Tincidunt lobortis feugiat vivamus at\r\n            <a href=\"#\" placement=\"left\" tooltip=\"On the Left!\">left</a> eget arcu dictum varius duis at consectetur lorem. Vitae elementum curabitur\r\n            <a href=\"#\" placement=\"right\" tooltip=\"On the Right!\">right</a> nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas\r\n            <a href=\"#\" placement=\"bottom\" tooltip=\"On the Bottom!\">bottom</a> pharetra convallis posuere morbi leo urna,\r\n            <a href=\"#\" [tooltipAnimation]=\"false\" tooltip=\"I don't fade. :-(\">fading</a> at elementum eu, facilisis sed odio morbi quis commodo odio. In cursus\r\n            <a href=\"#\" delay='1000' tooltip='appears with delay'>delayed</a> turpis massa tincidunt dui ut. nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas\r\n        </p>\r\n        <p>\r\n            I can even contain HTML. <a href=\"#\" [tooltip]=\"htmlTooltip\" (tooltipStateChanged)=\"tooltipStateChanged($event)\">Check me out!</a>\r\n        </p>\r\n        <ng-template #toolTipTemplate>\r\n            <h4>Tool tip custom content defined inside a template</h4>\r\n            <h5>With context binding: {{ttcontent}}</h5>\r\n        </ng-template>\r\n        <p>\r\n            Or use a TemplateRef. <a href=\"#\" [tooltip]=\"toolTipTemplate\">Check me out!</a>\r\n        </p>\r\n        <p>\r\n            Programatically show/hide tooltip\r\n            <a href=\"#\" [tooltip]=\"'Foo'\" (tooltipStateChanged)=\"tooltipStateChanged($event)\" #tooltip=\"bs-tooltip\">Check me out!</a>\r\n            <br>\r\n            <button class=\"btn btn-sm btn-primary\" (click)=\"tooltip.show()\">Show tooltip</button>\r\n            <button class=\"btn btn-sm btn-danger\" (click)=\"tooltip.hide()\">Hide tooltip</button>\r\n        </p>\r\n        <p>\r\n            I can have a custom class. <a href=\"#\" tooltip=\"I can have a custom class applied to me!\">Check me out!</a>\r\n        </p>\r\n        <form role=\"form\">\r\n            <div class=\"form-group\">\r\n                <label>Or use custom triggers, like focus: </label>\r\n                <input type=\"text\" name=\"clickMe\" value=\"Click me!\" tooltip=\"See? Now click away...\" triggers=\"focus\" placement=\"top\" class=\"form-control\" />\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- END panel-->\r\n"

/***/ }),

/***/ "./src/app/routes/elements/notification/notification.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/routes/elements/notification/notification.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content {\n  top: 100px; }\n"

/***/ }),

/***/ "./src/app/routes/elements/notification/notification.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/elements/notification/notification.component.ts ***!
  \************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(toasterService) {
        this.toasterService = toasterService;
        this.toasterconfig = new angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterConfig"]({
            positionClass: 'toast-bottom-right',
            showCloseButton: true
        });
        // ALERTs
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        // PROGRESSBAR
        this.max = 200;
        this.stacked = [];
        // TOOLTIPS
        this.dynamicTooltip = 'Hello, World!';
        this.dynamicTooltipText = 'dynamic';
        this.htmlTooltip = 'I\'ve been made <b>bold</b>!';
        this.tooltipModel = { text: 'foo', index: 1 };
        this.ttcontent = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        // RATINGS
        this.x = 5;
        this.y = 2;
        this.maxRat = 10;
        this.rate = 7;
        this.isReadonly = false;
        this.toaster = {
            type: 'success',
            title: 'Title',
            text: 'Message'
        };
        this.random();
        this.randomStacked();
    }
    NotificationComponent.prototype.ngOnInit = function () { };
    // TOSATER METHOD
    NotificationComponent.prototype.pop = function () {
        this.toasterService.pop(this.toaster.type, this.toaster.title, this.toaster.text);
    };
    ;
    // ALERT METHOD
    NotificationComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    NotificationComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    // PROGRESSBAR METHODS
    NotificationComponent.prototype.random = function () {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = (type === 'danger' || type === 'warning');
        this.dynamic = value;
        this.type = type;
    };
    ;
    NotificationComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var total = 0;
        var n = Math.floor((Math.random() * 4) + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor((Math.random() * 4));
            var value = Math.floor((Math.random() * 30) + 1);
            total += value;
            this.stacked.push({
                value: value,
                max: value,
                type: types[index]
            });
        }
    };
    ;
    // TOOLTIPS METHODS
    NotificationComponent.prototype.tooltipStateChanged = function (state) {
        console.log("Tooltip is open: " + state);
    };
    // RATINGS METHODS
    NotificationComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.maxRat);
    };
    ;
    NotificationComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/routes/elements/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/routes/elements/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/sortable/sortable.component.html":
/*!******************************************************************!*\
  !*** ./src/app/routes/elements/sortable/sortable.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Sortable</div>\r\n<h4>Simple sortable</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                Favorite drinks\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"listOne\">\r\n                    <li *ngFor=\"let item of listOne; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                My prefences:\r\n                <br/>\r\n                <span *ngFor=\"let item of listOne; let i = index\">{{i + 1}}) {{item}}<br/></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<h4>Multi list sortable</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-warning\">\r\n            <div class=\"panel-heading\">\r\n                Available boxers\r\n            </div>\r\n            <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listBoxers\">\r\n                <ul class=\"list-group\">\r\n                    <li *ngFor=\"let item of listBoxers; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                First Team\r\n            </div>\r\n            <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listTeamOne\">\r\n                <ul class=\"list-group\">\r\n                    <li *ngFor=\"let item of listTeamOne; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                Second Team\r\n            </div>\r\n            <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listTeamTwo\">\r\n                <ul class=\"list-group\">\r\n                    <li *ngFor=\"let item of listTeamTwo; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div>\r\n    <h4>\r\n        Drag-and-Drop - Shopping basket\r\n    </h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel panel-success\">\r\n                <div class=\"panel-heading\">Available products</div>\r\n                <div class=\"panel-body\">\r\n                    <div *ngFor=\"let product of availableProducts\" class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"product.quantity>0\" [dragData]=\"product\" (onDragSuccess)=\"orderedProduct($event)\" [dropZones]=\"['demo1']\">\r\n                        <div class=\"panel-body\">\r\n                            <div [hidden]=\"product.quantity===0\">{{product.name}} - ${{product.cost}}\r\n                                <br>(available: {{product.quantity}})</div>\r\n                            <div [hidden]=\"product.quantity>0\">\r\n                                <del>{{product.name}}</del>\r\n                                <br>(NOT available)</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div dnd-droppable (onDropSuccess)=\"addToBasket($event)\" [dropZones]=\"['demo1']\" class=\"panel panel-info\">\r\n                <div class=\"panel-heading\">Shopping Basket\r\n                    <div class=\"pull-right\">\r\n                        <button class=\"btn btn-default btn-sm\" (click)=\"resetBasket()\"><em class=\"fa fa-trash-o\"></em></button>\r\n                    </div>\r\n                    <br>(to pay: ${{ totalCost() }})</div>\r\n                <div class=\"panel-body\">\r\n                    <p [hidden]=\"!shoppingBasket.length\">Drag some items here..</p>\r\n                    <div *ngFor=\"let product of shoppingBasket\" class=\"panel panel-default\">\r\n                        <div class=\"panel-body\">\r\n                            {{product.name}}\r\n                            <br>(ordered: {{product.quantity}}\r\n                            <br>cost: ${{product.cost * product.quantity}})\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/elements/sortable/sortable.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/routes/elements/sortable/sortable.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/sortable/sortable.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/elements/sortable/sortable.component.ts ***!
  \****************************************************************/
/*! exports provided: SortableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return SortableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sortable_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.product */ "./src/app/routes/elements/sortable/sortable.product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableComponent = /** @class */ (function () {
    function SortableComponent() {
        this.availableProducts = [];
        this.shoppingBasket = [];
        this.listOne = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
        this.listBoxers = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
        this.listTeamOne = [];
        this.listTeamTwo = [];
        this.initProducts();
    }
    SortableComponent.prototype.initProducts = function () {
        this.availableProducts.push(new _sortable_product__WEBPACK_IMPORTED_MODULE_1__["Product"]('Blue Shoes', 3, 35));
        this.availableProducts.push(new _sortable_product__WEBPACK_IMPORTED_MODULE_1__["Product"]('Good Jacket', 1, 90));
        this.availableProducts.push(new _sortable_product__WEBPACK_IMPORTED_MODULE_1__["Product"]('Red Shirt', 5, 12));
        this.availableProducts.push(new _sortable_product__WEBPACK_IMPORTED_MODULE_1__["Product"]('Blue Jeans', 4, 60));
    };
    SortableComponent.prototype.orderedProduct = function ($event) {
        var orderedProduct = $event.dragData;
        orderedProduct.quantity--;
    };
    SortableComponent.prototype.addToBasket = function ($event) {
        var newProduct = $event.dragData;
        for (var indx in this.shoppingBasket) {
            var product = this.shoppingBasket[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        console.log('adding ' + newProduct);
        this.shoppingBasket.push(new _sortable_product__WEBPACK_IMPORTED_MODULE_1__["Product"](newProduct.name, 1, newProduct.cost));
    };
    SortableComponent.prototype.totalCost = function () {
        var cost = 0;
        for (var indx in this.shoppingBasket) {
            var product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    };
    SortableComponent.prototype.resetBasket = function () {
        this.availableProducts = [];
        this.shoppingBasket = [];
        this.initProducts();
    };
    SortableComponent.prototype.ngOnInit = function () {
    };
    SortableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sortable',
            template: __webpack_require__(/*! ./sortable.component.html */ "./src/app/routes/elements/sortable/sortable.component.html"),
            styles: [__webpack_require__(/*! ./sortable.component.scss */ "./src/app/routes/elements/sortable/sortable.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SortableComponent);
    return SortableComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/sortable/sortable.product.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/elements/sortable/sortable.product.ts ***!
  \**************************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(name, quantity, cost) {
        this.name = name;
        this.quantity = quantity;
        this.cost = cost;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/routes/elements/spinners/spinners.component.html":
/*!******************************************************************!*\
  !*** ./src/app/routes/elements/spinners/spinners.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Loading Spinners</div>\r\n<h4 class=\"page-header\">Loaders.css\r\n   <small class=\"text-muted\">Delightful and performance-focused pure css loading animations.</small>\r\n</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Pulse</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-pulse\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Grid Pulse</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-grid-pulse\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Clip Rotate</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-clip-rotate\">\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Clip Rotate Pul</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-clip-rotate-pulse\">\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Square Spin</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"square-spin\">\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Clip Rotate Mul</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-clip-rotate-multiple\">\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Pulse Rise</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-pulse-rise\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Rotate</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-rotate\">\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Cube Transition</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"cube-transition\">\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Zig Zag</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-zig-zag\">\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Zig Zag Deflect</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-zig-zag-deflect\">\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Triangle Path</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-triangle-path\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Scale</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-scale\">\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Line Scale</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"line-scale\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Line Scale Party</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"line-scale-party\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Scale Multiple</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-scale-multiple\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Pulse Sync</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-pulse-sync\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Beat</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-beat\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Line Scale Pulse Out</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"line-scale-pulse-out\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Line Scale Pulse Out</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"line-scale-pulse-out-rapid\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Scale Ripple</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-scale-ripple\">\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Scale Ripple Mu</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-scale-ripple-multiple\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Spin Fade Loade</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-spin-fade-loader\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Line Spin Fade Loade</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"line-spin-fade-loader\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Triangle Skew Spin</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"triangle-skew-spin\">\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Pacman</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"pacman\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ball Grid Beat</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"ball-grid-beat\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Semi Circle Spin</div>\r\n            <div class=\"panel-body loader-demo\">\r\n                <div class=\"semi-circle-spin\">\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<h4 class=\"page-header\">Spin Kit</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h5>Rotating plane</h5>\r\n            </div>\r\n            <div class=\"panel-body loader-demo loader-demo-sk\">\r\n                <div class=\"sk-rotating-plane\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h5>Double bounce</h5>\r\n            </div>\r\n            <div class=\"panel-body loader-demo loader-demo-sk\">\r\n                <div class=\"sk-double-bounce\">\r\n                    <div class=\"sk-child sk-double-bounce1\"></div>\r\n                    <div class=\"sk-child sk-double-bounce2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h5>Wave</h5>\r\n            </div>\r\n            <div class=\"panel-body loader-demo loader-demo-sk\">\r\n                <div class=\"sk-wave\">\r\n                    <div class=\"sk-rect sk-rect1\"></div>\r\n                    <div class=\"sk-rect sk-rect2\"></div>\r\n                    <div class=\"sk-rect sk-rect3\"></div>\r\n                    <div class=\"sk-rect sk-rect4\"></div>\r\n                    <div class=\"sk-rect sk-rect5\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h5>Wandering cubes</h5>\r\n            </div>\r\n            <div class=\"panel-body loader-demo loader-demo-sk\">\r\n                <div class=\"sk-wandering-cubes\">\r\n                    <div class=\"sk-cube sk-cube1\"></div>\r\n                    <div class=\"sk-cube sk-cube2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h5>Pulse</h5>\r\n            </div>\r\n            <div class=\"panel-body loader-demo loader-demo-sk\">\r\n                <div class=\"sk-spinner sk-spinner-pulse\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h5>Chasing dots</h5>\r\n            </div>\r\n            <div class=\"panel-body loader-demo loader-demo-sk\">\r\n                <div class=\"sk-chasing-dots\">\r\n                    <div class=\"sk-child sk-dot1\"></div>\r\n                    <div class=\"sk-child sk-dot2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h5>Three bounce</h5>\r\n            </div>\r\n            <div class=\"panel-body loader-demo loader-demo-sk\">\r\n                <div class=\"sk-three-bounce\">\r\n                    <div class=\"sk-child sk-bounce1\"></div>\r\n                    <div class=\"sk-child sk-bounce2\"></div>\r\n                    <div class=\"sk-child sk-bounce3\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h5>Circle</h5>\r\n            </div>\r\n            <div class=\"panel-body loader-demo loader-demo-sk\">\r\n                <div class=\"sk-circle\">\r\n                    <div class=\"sk-circle1 sk-child\"></div>\r\n                    <div class=\"sk-circle2 sk-child\"></div>\r\n                    <div class=\"sk-circle3 sk-child\"></div>\r\n                    <div class=\"sk-circle4 sk-child\"></div>\r\n                    <div class=\"sk-circle5 sk-child\"></div>\r\n                    <div class=\"sk-circle6 sk-child\"></div>\r\n                    <div class=\"sk-circle7 sk-child\"></div>\r\n                    <div class=\"sk-circle8 sk-child\"></div>\r\n                    <div class=\"sk-circle9 sk-child\"></div>\r\n                    <div class=\"sk-circle10 sk-child\"></div>\r\n                    <div class=\"sk-circle11 sk-child\"></div>\r\n                    <div class=\"sk-circle12 sk-child\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h5>Cube grid</h5>\r\n            </div>\r\n            <div class=\"panel-body loader-demo loader-demo-sk\">\r\n                <div class=\"sk-cube-grid\">\r\n                    <div class=\"sk-cube sk-cube1\"></div>\r\n                    <div class=\"sk-cube sk-cube2\"></div>\r\n                    <div class=\"sk-cube sk-cube3\"></div>\r\n                    <div class=\"sk-cube sk-cube4\"></div>\r\n                    <div class=\"sk-cube sk-cube5\"></div>\r\n                    <div class=\"sk-cube sk-cube6\"></div>\r\n                    <div class=\"sk-cube sk-cube7\"></div>\r\n                    <div class=\"sk-cube sk-cube8\"></div>\r\n                    <div class=\"sk-cube sk-cube9\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h5>Fading circle</h5>\r\n            </div>\r\n            <div class=\"panel-body loader-demo loader-demo-sk\">\r\n                <div class=\"sk-fading-circle\">\r\n                    <div class=\"sk-circle1 sk-circle\"></div>\r\n                    <div class=\"sk-circle2 sk-circle\"></div>\r\n                    <div class=\"sk-circle3 sk-circle\"></div>\r\n                    <div class=\"sk-circle4 sk-circle\"></div>\r\n                    <div class=\"sk-circle5 sk-circle\"></div>\r\n                    <div class=\"sk-circle6 sk-circle\"></div>\r\n                    <div class=\"sk-circle7 sk-circle\"></div>\r\n                    <div class=\"sk-circle8 sk-circle\"></div>\r\n                    <div class=\"sk-circle9 sk-circle\"></div>\r\n                    <div class=\"sk-circle10 sk-circle\"></div>\r\n                    <div class=\"sk-circle11 sk-circle\"></div>\r\n                    <div class=\"sk-circle12 sk-circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/elements/spinners/spinners.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/routes/elements/spinners/spinners.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/spinners/spinners.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/elements/spinners/spinners.component.ts ***!
  \****************************************************************/
/*! exports provided: SpinnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnersComponent", function() { return SpinnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnersComponent = /** @class */ (function () {
    function SpinnersComponent() {
    }
    SpinnersComponent.prototype.ngOnInit = function () {
    };
    SpinnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinners',
            template: __webpack_require__(/*! ./spinners.component.html */ "./src/app/routes/elements/spinners/spinners.component.html"),
            styles: [__webpack_require__(/*! ./spinners.component.scss */ "./src/app/routes/elements/spinners/spinners.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnersComponent);
    return SpinnersComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/sweetalert/sweetalert.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/routes/elements/sweetalert/sweetalert.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">SweetAlert\r\n    <small>A Beautiful Replacement For Javascript's \"alert\"</small>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <h4 class=\"page-header mt0\">Usage examples</h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-lg-6\">\r\n            <p>A basic message</p>\r\n        </div>\r\n        <div class=\"col-sm-3 col-lg-6\">\r\n            <p><a class=\"btn btn-primary\" href=\"#\" (click)=\"sweetalertDemo1()\">Try me!</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-lg-6\">\r\n            <p>A title with a text under</p>\r\n        </div>\r\n        <div class=\"col-sm-3 col-lg-6\">\r\n            <p><a class=\"btn btn-primary\" href=\"#\" (click)=\"sweetalertDemo2()\">Try me!</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-lg-6\">\r\n            <p>A success message!</p>\r\n        </div>\r\n        <div class=\"col-sm-3 col-lg-6\">\r\n            <p><a class=\"btn btn-primary\" href=\"#\" (click)=\"sweetalertDemo3()\">Try me!</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-lg-6\">\r\n            <p>A warning message, with a function attached to the &quot;Confirm&quot;-button</p>\r\n        </div>\r\n        <div class=\"col-sm-3 col-lg-6\">\r\n            <p><a class=\"btn btn-primary\" href=\"#\" (click)=\"sweetalertDemo4()\">Try me!</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-lg-6\">\r\n            <p>... and by passing a parameter, you can execute something else for &quot;Cancel&quot;.</p>\r\n        </div>\r\n        <div class=\"col-sm-3 col-lg-6\">\r\n            <p><a class=\"btn btn-primary\" href=\"#\" (click)=\"sweetalertDemo5()\">Try me!</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-lg-6\">\r\n            <p>A message with a custom icon</p>\r\n        </div>\r\n        <div class=\"col-sm-3 col-lg-6\">\r\n            <p><a class=\"btn btn-primary\" href=\"#\" (click)=\"sweetalertDemo6()\">Try me!</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/elements/sweetalert/sweetalert.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/routes/elements/sweetalert/sweetalert.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/sweetalert/sweetalert.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/elements/sweetalert/sweetalert.component.ts ***!
  \********************************************************************/
/*! exports provided: SweetalertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetalertComponent", function() { return SweetalertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var swal = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/lib/sweetalert.js");
var SweetalertComponent = /** @class */ (function () {
    function SweetalertComponent() {
    }
    SweetalertComponent.prototype.ngOnInit = function () { };
    SweetalertComponent.prototype.sweetalertDemo1 = function () {
        swal('Here\'s a message');
    };
    SweetalertComponent.prototype.sweetalertDemo2 = function () {
        swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
    };
    SweetalertComponent.prototype.sweetalertDemo3 = function () {
        swal('Good job!', 'You clicked the button!', 'success');
    };
    SweetalertComponent.prototype.sweetalertDemo4 = function () {
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            closeOnConfirm: false
        }, function () {
            swal('Booyah!');
        });
    };
    SweetalertComponent.prototype.sweetalertDemo5 = function () {
        swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel plx!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
            }
            else {
                swal('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    SweetalertComponent.prototype.sweetalertDemo6 = function () {
        swal({
            title: 'Sweet!',
            text: 'Here\'s a custom image.',
            imageUrl: 'assets/img/user/01.jpg'
        });
    };
    SweetalertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sweetalert',
            template: __webpack_require__(/*! ./sweetalert.component.html */ "./src/app/routes/elements/sweetalert/sweetalert.component.html"),
            styles: [__webpack_require__(/*! ./sweetalert.component.scss */ "./src/app/routes/elements/sweetalert/sweetalert.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SweetalertComponent);
    return SweetalertComponent;
}());



/***/ }),

/***/ "./src/app/routes/elements/typography/typography.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/routes/elements/typography/typography.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Typography</div>\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Headings</div>\r\n            <div class=\"panel-body\">\r\n                <h1>Heading 1\r\n               <small>Sub-heading</small>\r\n            </h1>\r\n                <h2>Heading 2\r\n               <small>Sub-heading</small>\r\n            </h2>\r\n                <h3>Heading 3\r\n               <small>Sub-heading</small>\r\n            </h3>\r\n                <h4>Heading 4\r\n               <small>Sub-heading</small>\r\n            </h4>\r\n                <h5>Heading 5\r\n               <small>Sub-heading</small>\r\n            </h5>\r\n                <h6>Heading 6\r\n               <small>Sub-heading</small>\r\n            </h6>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Paragraphs</div>\r\n            <div class=\"panel-body\">\r\n                <p class=\"lead\">This is an example of lead body copy.</p>\r\n                <p>This is an example of standard paragraph text. This is an example of<a href=\"#\">link anchor text</a>within body copy.</p>\r\n                <p>\r\n                    <small>This is an example of small, fine print text.</small>\r\n                </p>\r\n                <p>\r\n                    <strong>This is an example of strong, bold text.</strong>\r\n                </p>\r\n                <p>\r\n                    <em>This is an example of emphasized, italic text.</em>\r\n                </p>\r\n                <br/>\r\n                <h4>Alignment Helpers</h4>\r\n                <p class=\"text-left\">Left aligned text.</p>\r\n                <p class=\"text-center\">Center aligned text.</p>\r\n                <p class=\"text-right\">Right aligned text.</p>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Emphasis Classes</div>\r\n            <div class=\"panel-body\">\r\n                <p class=\"text-muted\">This is an example of muted text.</p>\r\n                <p class=\"text-primary\">This is an example of primary text.</p>\r\n                <p class=\"text-success\">This is an example of success text.</p>\r\n                <p class=\"text-info\">This is an example of info text.</p>\r\n                <p class=\"text-warning\">This is an example of warning text.</p>\r\n                <p class=\"text-danger\">This is an example of danger text.</p>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Abbreviations</div>\r\n            <div class=\"panel-body\">\r\n                <p>The abbreviation of the word attribute is\r\n                    <abbr title=\"attribute\">attr</abbr>.</p>\r\n                <p>\r\n                    <abbr class=\"initialism\" title=\"HyperText Markup Language\">HTML</abbr>is an abbreviation for a programming language.</p>\r\n                <br/>\r\n                <h4>Addresses</h4>\r\n                <address>\r\n                    <strong>Twitter, Inc.</strong>\r\n                    <br/>795 Folsom Ave, Suite 600\r\n                    <br/>San Francisco, CA 94107\r\n                    <br/>\r\n                    <abbr title=\"Phone\">P:</abbr>(123) 456-7890</address>\r\n                <address>\r\n                    <strong>Full Name</strong>\r\n                    <br/><a href=\"mailto:#\">first.last@example.com</a>\r\n                </address>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Blockquotes</div>\r\n            <div class=\"panel-body\">\r\n                <h4>Default Blockquote</h4>\r\n                <blockquote>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                </blockquote>\r\n                <h4>Blockquote with Citation</h4>\r\n                <blockquote>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                    <small>Someone famous in\r\n                  <cite title=\"Source Title\">Source Title</cite>\r\n               </small>\r\n                </blockquote>\r\n                <h4>Right Aligned Blockquote</h4>\r\n                <blockquote class=\"pull-right\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                </blockquote>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Lists</div>\r\n            <div class=\"panel-body\">\r\n                <h4>Unordered List</h4>\r\n                <ul>\r\n                    <li>List Item</li>\r\n                    <li>List Item</li>\r\n                    <li>\r\n                        <ul>\r\n                            <li>List Item</li>\r\n                            <li>List Item</li>\r\n                            <li>List Item</li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>List Item</li>\r\n                </ul>\r\n                <h4>Ordered List</h4>\r\n                <ol>\r\n                    <li>List Item</li>\r\n                    <li>List Item</li>\r\n                    <li>List Item</li>\r\n                </ol>\r\n                <h4>Unstyled List</h4>\r\n                <ul class=\"list-unstyled\">\r\n                    <li>List Item</li>\r\n                    <li>List Item</li>\r\n                    <li>List Item</li>\r\n                </ul>\r\n                <h4>Inline List</h4>\r\n                <ul class=\"list-inline\">\r\n                    <li>List Item</li>\r\n                    <li>List Item</li>\r\n                    <li>List Item</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Description Lists</div>\r\n            <div class=\"panel-body\">\r\n                <dl>\r\n                    <dt>Standard Description List</dt>\r\n                    <dd>Description Text</dd>\r\n                    <dt>Description List Title</dt>\r\n                    <dd>Description List Text</dd>\r\n                </dl>\r\n                <dl class=\"dl-horizontal\">\r\n                    <dt>Horizontal Description List</dt>\r\n                    <dd>Description Text</dd>\r\n                    <dt>Description List Title</dt>\r\n                    <dd>Description List Text</dd>\r\n                </dl>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Code</div>\r\n            <div class=\"panel-body\">\r\n                <p>This is an example of an inline code element within body copy. Wrap inline code within a<code><code>...</code></code>tag.</p><pre>\\nThis is an example of preformatted text.</pre>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n"

/***/ }),

/***/ "./src/app/routes/elements/typography/typography.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/routes/elements/typography/typography.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/elements/typography/typography.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/elements/typography/typography.component.ts ***!
  \********************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/routes/elements/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/routes/elements/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=elements-elements-module.js.map