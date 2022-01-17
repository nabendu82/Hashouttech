import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video 
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
          channel="thewebdev"
          description="This is a Windows PC" 
          song="I am windows PC"
          likes={145} 
          shares={100} 
          messages={45} />
        <Video 
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel="nabendu82"
          description="Editing with Kdenlive" 
          song="Kdenlive in WIndows"
          likes={155} 
          shares={120} 
          messages={55} />
      </div>
    </div>
  );
}

export default App;
