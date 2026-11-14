module.exports = {
    openapi: "3.0.0",
    info: {
        title: "Mi primera api en express",
        version: "1.0.0",
        description: "Backend Developer Web"
    },
    paths: {
        "/api/saludo": {
            get: {
                tags: ["General"],
                summary: "Devuelveme un saludo",
                responses: {
                    200: {
                        description: "Saludo devuelto exitosamente",
                        content: {
                            "application/json": {
                                example: {
                                    mensaje: "Hola desde mi API"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/yo": {
            get: {
                tags: ["Ejercicios"],
                summary: "Devueleveme información sobre mí",
                responses: {
                    200: {
                        description: "Información devuelta exitosamente",
                        content: {
                            "application/json": {
                                example: {
                                    Nombre: "Jose Gonzales",
                                    Carrera: "Ingenieria en software"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/edad/{anio}": {
            get: {
                tags: ["Ejercicios"],
                summary: "Devuelveme mi edad",
                parameters: [
                    {
                        name: "anio",
                        in: "path",
                        required: true,
                        description: "Año de nacimiento",
                        schema: {
                            type: "integer"
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Edad devuelta exitosamente",
                        content: {
                            "application/json": {
                                example: {
                                    edad: 23,
                                    año: 2003
                                }
                            }
                        }
                    },
                    400: {
                        description: "Año inválido",
                        content: {
                            "application/json": {
                                example: {
                                    error: "Año inválido"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}