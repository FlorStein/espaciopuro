"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  { id: "01", name: "Casa Dosel", place: "Tigre, BA", year: "2025", type: "Residencial", image: "/projects/casa-dosel.jpg", text: "Una casa que no ocupa el bosque: lo continúa. Hormigón pigmentado, madera y patios escalonados regulan la luz y la intimidad." },
  { id: "02", name: "Patio Rojo", place: "Mendoza", year: "2024", type: "Hospitalidad", image: "/projects/patio-rojo.jpg", text: "Muros minerales y agua trazan un microclima silencioso. Cada arco encuadra una hora distinta del paisaje." },
  { id: "03", name: "Casa Umbra", place: "Punta del Este", year: "2024", type: "Residencial", image: "/projects/casa-umbra.jpg", text: "Un gran techo de madera reúne las escenas domésticas. La sombra se vuelve materia y el jardín, una habitación más." },
  { id: "04", name: "Casa Curva", place: "San Isidro, BA", year: "2023", type: "Residencial", image: "/projects/casa-curva.jpg", text: "La envolvente curva suaviza el límite urbano y conduce hacia un corazón vegetal protegido." },
];

const services = [
  ["01", "Arquitectura", "Casas, edificios y espacios de hospitalidad concebidos desde el lugar."],
  ["02", "Interiores", "Atmósferas precisas donde luz, textura y uso hablan el mismo idioma."],
  ["03", "Dirección de obra", "Acompañamiento integral, del primer croquis al último encuentro material."],
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [menu, setMenu] = useState(false);
  const [material, setMaterial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!heroRef.current) return;
      heroRef.current.style.setProperty("--mx", `${(e.clientX / innerWidth - .5) * 24}px`);
      heroRef.current.style.setProperty("--my", `${(e.clientY / innerHeight - .5) * 18}px`);
    };
    addEventListener("pointermove", onMove);
    return () => removeEventListener("pointermove", onMove);
  }, []);

  return (
    <main>
      <div className="grain" />
      <header>
        <a className="brand" href="#inicio" aria-label="Espacio Puro — inicio">
          <span className="brand-mark"><i /><i /><i /></span>
          <strong>ESPACIO<br />PURO</strong>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a><a href="#estudio">Estudio</a><a href="#servicios">Servicios</a>
        </nav>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-expanded={menu}>{menu ? "Cerrar" : "Menú"} <span>↗</span></button>
      </header>

      {menu && <div className="menu-panel">
        <p>RECOLETA · BUENOS AIRES</p>
        {["Proyectos", "Estudio", "Servicios", "Contacto"].map((x, i) => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setMenu(false)}><small>0{i + 1}</small>{x}<span>↗</span></a>)}
      </div>}

      <section className="hero" id="inicio" ref={heroRef}>
        <div className="hero-image"><img src="/projects/casa-dosel.jpg" alt="Casa Dosel integrada en un paisaje frondoso" /></div>
        <div className="hero-grid" />
        <div className="hero-top"><span>ESTUDIO DE ARQUITECTURA</span><span>34°35′S / 58°23′O</span></div>
        <h1><span>ESPACIO</span><em>puro</em></h1>
        <p className="hero-copy">Construimos <strong>lugares esenciales</strong> donde materia, luz y naturaleza encuentran su equilibrio.</p>
        <a className="round-link" href="#proyectos"><span>Explorar<br />proyectos</span><b>↓</b></a>
        <div className="hero-caption"><b>CASA DOSEL</b><span>TIGRE, BUENOS AIRES</span><span>2025</span></div>
      </section>

      <section className="manifesto" id="estudio">
        <span className="section-tag">[01 — MANIFIESTO]</span>
        <div>
          <p>No diseñamos objetos.</p>
          <p>Diseñamos la relación entre</p>
          <p><em>el cuerpo y el espacio.</em></p>
        </div>
        <aside>Creemos en una arquitectura serena, táctil y duradera. Una práctica que escucha antes de dibujar y que encuentra potencia en lo necesario.</aside>
      </section>

      <section className="projects" id="proyectos">
        <div className="section-heading">
          <span className="section-tag">[02 — OBRA SELECCIONADA]</span>
          <h2>PROYECTOS<sup>04</sup></h2>
          <p>Una selección de espacios pensados para habitarse con todos los sentidos.</p>
        </div>
        <div className="project-stage">
          <div className="project-visual" key={projects[active].name}>
            <img src={projects[active].image} alt={projects[active].name} />
            <div className="focus-box"><i /><i /><i /><i /><span>{projects[active].id}</span></div>
          </div>
          <div className="project-info">
            <span>{projects[active].type}</span>
            <h3>{projects[active].name}</h3>
            <p>{projects[active].text}</p>
            <dl><div><dt>LUGAR</dt><dd>{projects[active].place}</dd></div><div><dt>AÑO</dt><dd>{projects[active].year}</dd></div></dl>
            <a href="#contacto">Ver proyecto <b>↗</b></a>
          </div>
        </div>
        <div className="project-tabs">
          {projects.map((p, i) => <button key={p.name} onClick={() => setActive(i)} className={i === active ? "active" : ""}><span>{p.id}</span>{p.name}<small>{p.place}</small></button>)}
        </div>
      </section>

      <section className="material-lab">
        <div className="material-copy">
          <span className="section-tag">[03 — MATERIA]</span>
          <h2>LA MATERIA<br /><em>también habla.</em></h2>
          <p>Elegí una superficie y descubrí cómo cambia la atmósfera. No buscamos revestir: buscamos revelar el carácter de cada espacio.</p>
          <div className="swatches">
            {["Madera", "Arcilla", "Ámbar"].map((x, i) => <button onClick={() => setMaterial(i)} className={i === material ? "active" : ""} key={x}><i />{x}</button>)}
          </div>
        </div>
        <div className="material-image">
          <img src={["/projects/comedor-orbita.jpg", "/projects/patio-rojo.jpg", "/projects/bano-ambar.jpg"][material]} alt="Exploración material" />
          <span>{["01 / CALIDEZ", "02 / TIERRA", "03 / LUZ"][material]}</span>
        </div>
      </section>

      <section className="services" id="servicios">
        <span className="section-tag">[04 — QUÉ HACEMOS]</span>
        <h2>DE LA IDEA<br />AL ESPACIO.</h2>
        <div className="service-list">
          {services.map((s) => <article key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><b>↗</b></article>)}
        </div>
      </section>

      <section className="process">
        <div className="plan">
          <div className="room r1">IDEA</div><div className="room r2">MATERIA</div><div className="room r3">LUZ</div><div className="room r4">HABITAR</div>
          <span className="dimension d1">8.40 M</span><span className="dimension d2">12.00 M</span>
        </div>
        <div className="process-copy"><span className="section-tag">[05 — PROCESO]</span><h2>CADA PROYECTO<br />EMPIEZA CON<br /><em>una conversación.</em></h2><p>Trabajamos cerca. Preguntamos, medimos, probamos. El proyecto crece por capas hasta volverse inevitable.</p></div>
      </section>

      <section className="contact" id="contacto">
        <img src="/projects/refugio-linde.jpg" alt="" />
        <div className="contact-overlay" />
        <span className="section-tag">[06 — HABLEMOS]</span>
        <h2>¿CONSTRUIMOS<br /><em>algo puro?</em></h2>
        <a href="mailto:hola@espaciopuro.ar">hola@espaciopuro.ar <span>↗</span></a>
        <div className="contact-meta"><p>Montevideo 1685<br />Recoleta, Buenos Aires</p><p>+54 11 4804 2025<br />Lun—Vie / 10—18h</p><p>Instagram<br />Pinterest</p></div>
      </section>
      <footer><strong>ESPACIO PURO</strong><span>© 2026</span><a href="#inicio">VOLVER ARRIBA ↑</a></footer>
    </main>
  );
}
