const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}