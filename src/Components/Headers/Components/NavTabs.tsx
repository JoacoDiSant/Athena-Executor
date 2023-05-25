import { Button } from 'antd';
import React from 'react';

function NavTabs() {
  return (
    <div>
      <Button>
        <a href="#home">Inicio</a>
      </Button>
      <Button>
        <a href="#about">Servicios</a>
      </Button>
      <Button>
        <a href="#services">Quienes Somos</a>
      </Button>
      <Button>
        <a href="#contact">Contacto</a>
      </Button>
    </div>
  );
}

export default NavTabs;

/*
 * TODO: instalar esto npm install react-responsive

  para hacer esto

  import React from 'react';
  import { MediaQuery } from 'react-responsive';

  const MyComponent = () => {
    return (
      <div>
        <MediaQuery maxWidth={767}>
          <div>Elemento para móviles</div>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <div>Elemento para escritorio</div>
        </MediaQuery>
      </div>
    );
  };

  export default MyComponent;


 */
