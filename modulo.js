var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var miInstituto;
(function (miInstituto) {
    // Clase Persona.
    var Persona = /** @class */ (function () {
        // Constructor.
        function Persona(apellido, nombre, sexo, edad, altura, peso) {
            this._apellido = apellido;
            this._nombre = nombre;
            this._sexo = sexo;
            this._edad = edad;
            this._altura = altura;
            this._peso = peso;
        }
        Object.defineProperty(Persona.prototype, "apellido", {
            // Getters.
            get: function () {
                return this._apellido;
            },
            // Setters.
            set: function (apellido) {
                this._apellido = apellido;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "nombre", {
            get: function () {
                return this._nombre;
            },
            set: function (nombre) {
                this._nombre = nombre;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "sexo", {
            get: function () {
                return this._sexo;
            },
            set: function (sexo) {
                this._sexo = sexo;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "edad", {
            get: function () {
                return this._edad;
            },
            set: function (edad) {
                this._edad = edad;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "altura", {
            get: function () {
                return this._altura;
            },
            set: function (altura) {
                this._altura = altura;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "peso", {
            get: function () {
                return this._peso;
            },
            set: function (peso) {
                this._peso = peso;
            },
            enumerable: false,
            configurable: true
        });
        return Persona;
    }());
    miInstituto.Persona = Persona;
    // Clase Estudiante.
    var Estudiante = /** @class */ (function (_super) {
        __extends(Estudiante, _super);
        // Constructor.
        function Estudiante(apellido, nombre, sexo, edad, altura, peso, promocion) {
            var _this = _super.call(this, apellido, nombre, sexo, edad, altura, peso) || this;
            _this._promocion = promocion;
            return _this;
        }
        Object.defineProperty(Estudiante.prototype, "promocion", {
            // Getters.
            get: function () {
                return this._promocion;
            },
            // Setters.
            set: function (promocion) {
                this._promocion = promocion;
            },
            enumerable: false,
            configurable: true
        });
        return Estudiante;
    }(Persona));
    miInstituto.Estudiante = Estudiante;
    // Clase Curso.
    var Curso = /** @class */ (function () {
        // Constructor.
        function Curso(materia) {
            this._materia = materia;
        }
        Object.defineProperty(Curso.prototype, "materia", {
            // Getters.
            get: function () {
                return this._materia;
            },
            // Setters.
            set: function (materia) {
                this._materia = materia;
            },
            enumerable: false,
            configurable: true
        });
        return Curso;
    }());
    miInstituto.Curso = Curso;
    var Formador = /** @class */ (function (_super) {
        __extends(Formador, _super);
        // Constructor
        function Formador(apellido, nombre, sexo, edad, altura, peso, listaCursos) {
            var _this = _super.call(this, apellido, nombre, sexo, edad, altura, peso) || this;
            _this._listaCursos = listaCursos;
            return _this;
        }
        Object.defineProperty(Formador.prototype, "listaCursos", {
            // Getters.
            get: function () {
                return this._listaCursos;
            },
            // Setters.
            set: function (listaCursos) {
                this._listaCursos = listaCursos;
            },
            enumerable: false,
            configurable: true
        });
        Formador.prototype.aniadirCurso = function (curso) {
            this._listaCursos.push(curso);
        };
        Formador.prototype.mostrarListaCursos = function () {
            this._listaCursos.forEach(function (curso) { console.log("-" + curso.materia); });
        };
        Formador.prototype.mostrar = function () {
            console.log("Yo, " + this.nombre + " " + this.apellido + ", enseño cursos de: ");
            this.mostrarListaCursos();
        };
        return Formador;
    }(Persona));
    miInstituto.Formador = Formador;
})(miInstituto || (miInstituto = {}));
// Instancias de Curso.
var curso1 = new miInstituto.Curso("Java");
var curso2 = new miInstituto.Curso("JavaScript");
// Crear lista de cursos.
var listaCursos = [curso1, curso2];
// Instancia de Formador.
var formador = new miInstituto.Formador("García García", "Alejandra", "mujer", 32, 168, 68, listaCursos);
formador.mostrar();
