module miInstituto
{
    // Clase Persona.
    export class Persona
    {
        private _apellido: string;
        private _nombre: string;
        private _sexo: string;
        private _edad: number;
        private _altura: number;
        private _peso: number;

        // Constructor.
        constructor (apellido: string, nombre: string, sexo: string, edad: number, 
                     altura: number, peso: number)
        {
            this._apellido = apellido;
            this._nombre = nombre;
            this._sexo = sexo;
            this._edad = edad;
            this._altura = altura;
            this._peso = peso;
        }

        // Getters.
        get apellido() {
            return this._apellido;
        }
        get nombre() {
            return this._nombre;
        }
        get sexo() {
            return this._sexo;
        }
        get edad() {
            return this._edad;
        }
        get altura() {
            return this._altura;
        }
        get peso() {
            return this._peso;
        }

        // Setters.
        set apellido(apellido: string) {
            this._apellido = apellido;
        }
        set nombre(nombre: string) {
            this._nombre = nombre;
        }
        set sexo(sexo: string) {
            this._sexo = sexo;
        }
        set edad(edad: number) {
            this._edad = edad;
        }
        set altura(altura: number) {
            this._altura = altura;
        }
        set peso(peso: number) {
            this._peso = peso;
        }
    }


    // Clase Estudiante.
    export class Estudiante extends Persona
    {
        private _promocion: string;

        // Constructor.
        constructor(apellido: string, nombre: string, sexo: string, edad: number, 
                    altura: number, peso: number, promocion: string)
        {
            super(apellido, nombre, sexo, edad, altura, peso);
            this._promocion = promocion;
        }

        // Getters.
        get promocion() {
            return this._promocion;
        }

        // Setters.
        set promocion(promocion: string) {
            this._promocion = promocion;
        }
    }


    // Clase Curso.
    export class Curso 
    {
        private _materia: string;

        // Constructor.
        constructor (materia: string)
        {
            this._materia = materia;
        }

        // Getters.
        get materia() {
            return this._materia;
        }

        // Setters.
        set materia(materia: string) {
            this._materia = materia;
        }
    }


    // Clase Formador.
    export class Formador extends Persona
    {
        private _listaCursos: Curso[];

        // Constructor
        constructor (apellido: string, nombre: string, sexo: string, edad: number, 
                     altura: number, peso: number, listaCursos: Curso[])
        {
            super(apellido, nombre, sexo, edad, altura, peso)
            this._listaCursos = listaCursos;
        }

        // Getters.
        get listaCursos() {
            return this._listaCursos;
        }

        // Setters.
        set listaCursos(listaCursos: Curso[]) {
            this._listaCursos = listaCursos;
        }

        aniadirCurso(curso: Curso)
        {
            this._listaCursos.push(curso);
        }

        mostrarListaCursos()
        {
            this._listaCursos.forEach(curso => {console.log("-" + curso.materia)});
        }

        mostrar()
        {
            console.log("Yo, " + this.nombre + " " + this.apellido + ", enseño cursos de: ");
            this.mostrarListaCursos();
        }
    }
}

// Instancias de Curso.
let curso1: miInstituto.Curso = new miInstituto.Curso("Java");
let curso2: miInstituto.Curso = new miInstituto.Curso("JavaScript");
// Crear lista de cursos.
let listaCursos: miInstituto.Curso[] = [curso1, curso2];

// Instancia de Formador.
let formador: miInstituto.Formador = new miInstituto.Formador("García García", "Alejandra",
                                                              "mujer", 32, 168, 68, listaCursos);

formador.mostrar();


