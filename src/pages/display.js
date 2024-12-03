import './App.css';
import {Page} from './data.js';

function Display () {
  const showPage = Page.map(page =>
    <div key={page.id} className="container-fluid align-self-center">
      <div className="row m-4 bg-light text-center align-self-center">
        <div className="col-sm-12">
          <h5>{page.name}</h5>

          <img
            src={page.imageURL}
            alt={page.name} className="img img-thumbnail w-25"
          />

          <p>{page.info}</p>
        </div>
      </div>
    </div>
  );

    return ( 
      <>
        <div>{showPage}</div>
      </>
    )
};

export default Display;