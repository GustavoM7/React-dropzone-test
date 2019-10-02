import React from 'react';
import logo from './logo.svg';
import Dropzone from 'react-dropzone';
import './App.css'

class App extends React.Component{

  state = {
    file: null,
  }

  acceptFile = (file) =>{
    console.log(file)
    this.setState({file: file[0]});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Dropzone onDrop={acceptedFiles => this.acceptFile(acceptedFiles)}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} type="file" accept="image/x-png,image/gif,image/jpeg" />
                {this.state.file !== null? (<p>{this.state.file.path}</p>) : null}
                <p>Clique aqui ou arraste uma nova imagem</p>
                
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}

export default App;
