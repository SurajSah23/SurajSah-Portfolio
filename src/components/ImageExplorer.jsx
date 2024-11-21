import './ImageExplorer.css'; // Import CSS file for styling

const ImageExplorer = () => {
  return (
    <div className="image-explorer">
      <h1>Designing</h1>
      <div className="image-gallery">
        <div className="image-card">
          <img src="/images/NationalPressDay.jpg" alt="National Press Day" className="image-thumbnail" />
          <p>National Press Day</p>
        </div>
        <div className="image-card">
          <img src="/images/Task1.png" alt="Task 1" className="image-thumbnail" />
          <p>Task 1</p>
        </div>
        <div className="image-card">
          <img src="/images/ChildrensDay.jpg" alt="Designed" className="image-thumbnail" />
          <p>Designed</p>
        </div>
        <div className="image-card">
          <img src="/images/design.png" alt="Design" className="image-thumbnail" />
          <p>Design</p>
        </div>
      </div>
    </div>
  );
};

export default ImageExplorer;
