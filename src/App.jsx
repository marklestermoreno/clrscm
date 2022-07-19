import React, { useState, useEffect } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './index.css'
import { colors } from './data.js'


function App() {

  const [background, setBackground] = useState("#000000");
  const [current, setCurrent] = useState(null)

  const [text, setText] = useState("#ffffff")
  const [textCurrent, setTextCurrent] = useState(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrent(null)
    }, 1000)
    return () => clearTimeout(timeoutId);

  }, [current])

  useEffect(() => {
    const timeoutId2 = setTimeout(() => {
      setTextCurrent(null)
    }, 1000)
    return () => clearTimeout(timeoutId2);
  }, [textCurrent])


  // Pagination Background 

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage,] = useState(10);

  const [pageNumberLimit,] = useState(3);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(colors.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = colors.slice(indexOfFirstItem, indexOfLastItem);


  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          key={number}
          id={number}
          onClick={handleClick}
          style={
            currentPage === number ?

              {
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                margin: '0.5rem',
                color: '#ffffff',
                borderRadius: '0.5rem',
                background: '#0c1526',
                borderColor: 'white'
              }
              :
              {
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                margin: '0.5rem',
                color: '#0c1526',
                borderRadius: '0.5rem',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                borderColor: 'white'
              }
          }
        >
          {number}
        </button >
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const disabledPrev = currentPage === pages[0] ? true : false
  const disabledNext = currentPage === pages[pages.length - 1] ? true : false


  // Pagination Text 

  const [currentPageText, setcurrentPageText] = useState(1);
  const [itemsPerPageText,] = useState(10);

  const [pageNumberLimitText,] = useState(3);
  const [maxPageNumberLimitText, setmaxPageNumberLimitText] = useState(3);
  const [minPageNumberLimitText, setminPageNumberLimitText] = useState(0);

  const handleClickText = (event) => {
    setcurrentPageText(Number(event.target.id));
  };

  const pagesText = [];
  for (let i = 1; i <= Math.ceil(colors.length / itemsPerPageText); i++) {
    pagesText.push(i);
  }

  const indexOfLastItemText = currentPageText * itemsPerPageText;
  const indexOfFirstItemText = indexOfLastItemText - itemsPerPageText;
  const currentItemsText = colors.slice(indexOfFirstItemText, indexOfLastItemText);


  const renderPageNumbersText = pagesText.map((number) => {
    if (number < maxPageNumberLimitText + 1 && number > minPageNumberLimitText) {
      return (
        <button
          key={number}
          id={number}
          onClick={handleClickText}
          style={
            currentPageText === number ?

              {
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                margin: '0.5rem',
                color: '#ffffff',
                borderRadius: '0.5rem',
                background: '#0c1526',
                borderColor: 'white'
              }
              :

              {
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                margin: '0.5rem',
                color: '#0c1526',
                borderRadius: '0.5rem',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                borderColor: 'white'
              }
          }
        >
          {number}
        </button >
      );
    } else {
      return null;
    }
  });

  const handleNextbtnText = () => {
    setcurrentPageText(currentPageText + 1);

    if (currentPageText + 1 > maxPageNumberLimitText) {
      setmaxPageNumberLimitText(maxPageNumberLimitText + pageNumberLimitText);
      setminPageNumberLimitText(minPageNumberLimitText + pageNumberLimitText);
    }
  };

  const handlePrevbtnText = () => {
    setcurrentPageText(currentPageText - 1);

    if ((currentPageText - 1) % pageNumberLimitText === 0) {
      setmaxPageNumberLimitText(maxPageNumberLimitText - pageNumberLimitText);
      setminPageNumberLimitText(minPageNumberLimitText - pageNumberLimitText);
    }
  };

  const disabledPrevText = currentPageText === pagesText[0] ? true : false
  const disabledNextText = currentPageText === pagesText[pagesText.length - 1] ? true : false


  return (
    <>
      <div className="App" style={{ background: background }}>
        <div className="bg">
          <div className="container">

            {currentItems.map((color, index) => (
              <>
                <div key={index} className="card">
                  <div
                    style={{
                      background: color.hex,
                      filter: "brightness(65%)",
                      transform: color.hex === background ? "scaleX(1.3)" : "",
                    }}
                    className="box"
                    onClick={() => setBackground(color.hex)}
                  >
                  </div>
                  <CopyToClipboard text={`${color.hex}`}>
                    <p style={{
                      color: 'white',

                    }}
                      onClick={() => setCurrent(color.hex)}
                    >
                      {current === color.hex ? <p style={{ marginLeft: '8px' }}> COPIED </p> : color.hex}
                    </p>
                  </CopyToClipboard>
                </div>

              </>
            ))}
            {/* <h2 style={{
              color: 'white',
              paddingTop: '30px',
            }}> Background Color </h2> */}

            <div className='pagination' style={{ background: '#0c1526' }}>
              <div>
                <button
                  style={
                    !disabledPrev ?

                      {
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        background: '#ffffff',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        color: '#000000',
                        borderColor: 'white'

                      }
                      :
                      {
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        background: '#0c1526',
                        color: '#ffffff',
                        borderRadius: '0.5rem',
                        cursor: 'not-allowed',
                        borderColor: 'white'

                      }
                  }
                  onClick={handlePrevbtn}
                  disabled={disabledPrev}
                >
                  <p>Prev </p>
                </button>
              </div>
              <div style={{ padding: '3px' }}>  {renderPageNumbers} </div>
              <div>
                <button
                  style={!disabledNext ?

                    {
                      paddingTop: '0.5rem',
                      paddingBottom: '0.5rem',
                      paddingLeft: '1rem',
                      paddingRight: '1rem',
                      background: '#ffffff',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      borderColor: 'white'

                    }
                    :
                    {
                      paddingTop: '0.5rem',
                      paddingBottom: '0.5rem',
                      paddingLeft: '1rem',
                      paddingRight: '1rem',
                      background: '#0c1526',
                      color: '#ffffff',
                      borderRadius: '0.5rem',
                      cursor: 'not-allowed',
                      borderColor: 'white'

                    }
                  }
                  onClick={handleNextbtn}
                  disabled={disabledNext}
                >
                  <p>  Next </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="sample-text">
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <h1 className='title-text' style={{ color: text, fontSize:'50px'}}> 
            HELLO WORLD 
            </h1>
            <br /> <br />
            <p className='sub-text' style={{ color: text}}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique a orci eget luctus. Vestibulum aliquam, augue id convallis condimentum, orci eros bibendum sem, et vulputate nulla dolor a ex. In rhoncus purus sed sagittis vehicula. Vestibulum in sapien ultricies, scelerisque ante luctus, convallis lacus. Proin dictum pretium turpis, varius faucibus dui efficitur sed. Cras auctor ut felis ut sodales. Fusce viverra sapien vitae ante cursus commodo. Nulla lobortis, orci in venenatis ullamcorper, metus arcu aliquet lacus, ultricies convallis nisi libero ac sapien. Maecenas ultrices lacus quam, scelerisque posuere metus ullamcorper eget. Aliquam finibus enim ut lectus imperdiet, vitae rhoncus elit posuere.
            </p>
            <br />
            <p className='sub-text' style={{ color: text}}> 
            Aenean quis risus in tellus luctus consequat. Curabitur consequat commodo lectus quis euismod. Nam tristique, libero consequat molestie congue, arcu leo ultrices leo, et sagittis eros dui a enim. Integer sed nunc sit amet metus iaculis porttitor. Nam nec dignissim nisl, aliquam luctus quam. Suspendisse volutpat felis a pellentesque consectetur. Nullam sagittis ac nisi eu efficitur. Fusce est odio, commodo vel faucibus a, imperdiet non mi.      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique a orci eget luctus. Vestibulum aliquam, augue id convallis condimentum, orci eros bibendum sem, et vulputate nulla dolor a ex. In rhoncus purus sed sagittis vehicula. 
            </p>
          </div>
        </div>

        <div className="text">
          <div className="container">
            {currentItemsText.map((color, index) => (
              <CopyToClipboard text={`${color.hex}`}>
                <div key={index} className="card">
                  <div
                    style={{
                      background: color.hex,
                      filter: "brightness(65%)",
                      transform: color.hex === text ? "scale(1.2)" : ""
                    }}
                    className="box"
                    onClick={() => setText(color.hex)}
                  />

                  <p style={{
                    color: color.hex
                  }}
                    onClick={() => setTextCurrent(color.hex)}
                  >
                      {textCurrent === color.hex ? <p style={{ marginLeft: '8px' }}> COPIED </p> : color.hex}
                  </p>
                </div>
              </CopyToClipboard>
            ))}
            {/* <h2 style={{
              color: 'white',
              paddingTop: '30px',
            }}> Text Color </h2> */}
            <div className='pagination' style={{ background: '#0c1526' }}>
              <div>
                <button
                  style={
                    !disabledPrevText ?

                      {
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        background: '#ffffff',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        color: '#000000',
                        borderColor: 'white'

                      }
                      :
                      {
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        background: '#0c1526',
                        color: '#ffffff',
                        borderRadius: '0.5rem',
                        cursor: 'not-allowed',
                        borderColor: 'white'

                      }
                  }
                  onClick={handlePrevbtnText}
                  disabled={disabledPrevText}
                >
                  <p>Prev </p>
                </button>
              </div>
              <div style={{ padding: '3px' }}>  {renderPageNumbersText} </div>
              <div>
                <button
                  style={!disabledNextText ?

                    {
                      paddingTop: '0.5rem',
                      paddingBottom: '0.5rem',
                      paddingLeft: '1rem',
                      paddingRight: '1rem',
                      background: '#ffffff',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      borderColor: "white"

                    }
                    :
                    {
                      paddingTop: '0.5rem',
                      paddingBottom: '0.5rem',
                      paddingLeft: '1rem',
                      paddingRight: '1rem',
                      background: '#0c1526',
                      color: '#ffffff',
                      borderRadius: '0.5rem',
                      cursor: 'not-allowed',
                      borderColor: "white"

                    }
                  }
                  onClick={handleNextbtnText}
                  disabled={disabledNextText}
                >
                  <p>  Next </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm">
          <h1> THIS WEB APP DOES NOT SUPPORT YOUR DEVICES  </h1>
      </div>
    </>
  );
}

export default App;
