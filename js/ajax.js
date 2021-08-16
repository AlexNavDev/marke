export default function serviciosAjax() {
  const $contenedorServicios = document.getElementById("servicios__contenedor"),
    $templateServicios = document.getElementById("servicios-template").content,
    $fragmentServicios = document.createDocumentFragment(),
    $contenedorModal = document.getElementById("modal__contenedor"),
    $templateModal = document.getElementById("modal-template").content,
    $fragmentModal = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("json/servicios.json"),
        json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      json.forEach((servicio) => {
        $templateServicios
          .querySelector("img")
          .setAttribute("src", `${servicio.icono}`);
        $templateServicios.querySelector("img").alt = `${servicio.nombre}`;
        $templateServicios.querySelector(
          "p"
        ).textContent = `${servicio.nombre}`;
        let $cloneServicios = document.importNode($templateServicios, true);
        $fragmentServicios.appendChild($cloneServicios);

        $templateModal.querySelector("h3").innerHTML = `${servicio.nombre}`;
        $templateModal.querySelector(
          ".modal__texto p"
        ).innerHTML = `${servicio.informacion}`;
        let $cloneModal = document.importNode($templateModal, true);
        $fragmentModal.appendChild($cloneModal);
      });

      $contenedorServicios.appendChild($fragmentServicios);
      $contenedorModal.appendChild($fragmentModal);
    } catch (error) {
      let message = error.statusText || "Ocurrió un error";
      $contenedorServicios.innerHTML = `Error ${error.status}: ${message}`;
    }
  }

  getData();
}
