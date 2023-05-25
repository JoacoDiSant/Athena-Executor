// import { Button } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';

function NavTabs() {
  return (
    // <div>
    //   <Button>
    //     <a href="#home">Inicio</a>
    //   </Button>
    //   <Button>
    //     <a href="#about">Servicios</a>
    //   </Button>
    //   <Button>
    //     <a href="#services">Quienes Somos</a>
    //   </Button>
    //   <Button>
    //     <a href="#contact">Contacto</a>
    //   </Button>
    // </div>
    <div>
      <h1>Device Test!</h1>
      <MediaQuery minWidth={1224}>
        <p>You are a desktop or laptop</p>
        <MediaQuery minWidth={1824}>
          <p>You also have a huge screen</p>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery minResolution="2dppx">
        {/* You can also use a function (render prop) as a child */}
        {(matches) =>
          matches ? <p>You are retina</p> : <p>You are not retina</p>
        }
      </MediaQuery>
    </div>
  );
}

export default NavTabs;
