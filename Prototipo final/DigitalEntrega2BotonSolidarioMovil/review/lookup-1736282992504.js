(function(window, undefined) {
  var dictionary = {
    "a4bab000-9a84-467e-8c79-e8c4204bcb94": "Chats",
    "66a322e3-9db4-4795-8bd8-6e15aff2ff77": "BuscarSolicitudBusqueda",
    "860fd01c-3a0d-4c3e-ab13-56d4bfdea85e": "BuscarSolicitudPerfil",
    "b7f7e929-7688-40f4-8c23-c49150814d9e": "BuscarSolicitud",
    "8e06df49-4c93-45cd-bf06-c63399b3c574": "Registro",
    "756949ae-68db-4aa4-bb66-7b0851ff0aed": "DetallesSolicitud",
    "43beee58-63ae-471a-8cf8-740e44672a45": "HistorialTarea",
    "4b4827dd-3a93-486e-8c6e-5138590d7bbb": "CrearSolicitud",
    "f03b2c0b-fc93-4e47-8ce7-9af0a8e278d9": "Historial",
    "4642e6ff-2dbf-4707-a77c-b7823cf49dd3": "Foros",
    "e557a693-6ffa-43ad-a261-448faa2116ea": "Calendario",
    "203f26a3-58d4-4a62-bced-61dd350ee342": "CrearActividad",
    "22b21fc9-aa09-4504-8f6f-26a87f025985": "DetallesSolicitudConfirmar",
    "e9a09a35-61fd-4c8a-b3d0-28594073d2d1": "ListaActividades",
    "ac9443d6-3266-4a4f-89e6-d1a5abe1693b": "TareasChat",
    "69130588-7ac9-48a1-b417-483eb9a51e83": "Inicio de sesion",
    "2e65c8aa-e9e6-4f5c-8162-b23400b5c345": "ForoChat",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Pantalla de bienvenida",
    "5630aea7-d38a-4b4c-96c6-42cd99f5a266": "BuscarSolicitudConfirmar",
    "f1e07c58-e837-44a5-994d-f210faac9dac": "Tareas",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);