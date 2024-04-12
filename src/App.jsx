import "./App.css";
import FilterItem from "./components/FilterItem";
import TagItem from "./components/TagItem";

const TagList = [
  {
    uniqueNo: 1,
    title: "Cluntch",
  },
  {
    uniqueNo: 2,
    title: "Fabric Lining",
  },
  {
    uniqueNo: 3,
    title: "Baggit",
  },
  {
    uniqueNo: 4,
    title: "Multi",
  },
];

const FilterList = [
  {
    uniqueNo: 1,
    title: "Colour",
  },
  {
    uniqueNo: 2,
    title: "Size",
  },
  {
    uniqueNo: 3,
    title: "Brand",
  },
  {
    uniqueNo: 4,
    title: "Material",
  },
];
function App() {
  return (
    <>
      <div className="bg-container">
        <div className="container">
          <header>
            <div className="top-profile-container">
              <div className="profile-img-container">
                <img src="./img/SIMPLE CHATBOTS.png" className="profile-img" />
                <img src="./img/Ellipse.png" className="green-dot" />
              </div>
              <div className="profile-text-container">
                <div className="profile-inner-text">
                  <span>Timbu</span>
                  <img src="./img/Vector.png" alt="vector" />
                </div>
                <p>Chat Assistant</p>
              </div>
            </div>
            <div className="top-online">
              <img src="./img/Ellipse.png" className="dot" />
              <span>Online</span>
            </div>
          </header>
          <div className="chat-container ">
            <div className="chat-msg-container ">
              <div className="msg-container msg-from-container">
                <p>
                  Hi Sam! I am your personal shopping assistant , how can i help
                  you today ?
                </p>
              </div>
              <div>
                <span>4:45PM</span>
              </div>
            </div>
            <div className="chat-msg-container msg-align">
              <div className="msg-container msg-to-container">
                <p>
                  Hi Sam! I am your personal shopping assistant , how can i help
                  you today ?
                </p>
              </div>
              <div className="date-container">
                <span>4:46PM</span>
              </div>
            </div>
          </div>
          <div className="tag-container">
            <p className="tag-desc">Popular tags for handbag</p>
            <div className="tag-wrap">
              {TagList.map((eachTag) => (
                <TagItem tagDetails={eachTag} key={eachTag.uniqueNo} />
              ))}
              <button className="right-arrow">
                <img src="./img/right-arrow.png" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="inner-card">
              <img src="./img/card-img.png" />
              <div className="inner-card-text-container">
                <div className="inner-text-container">
                  <span>Bags on Timbu</span>
                  <img src="./img/Vector.png" />
                </div>
                <div className="inner-product">
                  <span>123 Products</span>
                  <img src="./img/right-icon.png" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="date">4:45PM</span>
          </div>
          <div className="filter-container">
            <span>Select Filters</span>
            <div className="filter-inner">
              <img src="./img/sliders-horizontal.png" alt="slider" />
              <p>Filter</p>
            </div>
          </div>
          <div className="selection-tags">
            <div className="select-tag selected-tag">
              <span>Strap-Long</span>
              <img src="./img/check.png" />
            </div>
            {FilterList.map((eachItem) => (
              <FilterItem filterDetails={eachItem} key={eachItem.uniqueNo} />
            ))}
          </div>
          <div className="bottom-container">
            <div className="bottom-input-container">
              <div className="input-container">
                <input type="text" placeholder="Type your message" />
                <img src="./img/paperclip.png" alt="paper-clip" />
              </div>
              <button className="btn-click">
                <img src="./img/btn.png" />
              </button>
            </div>
            <div className="copyright-container">
              <div className="copyright">
                <p>
                  Powered By <span>Krunk.ai</span>
                </p>
                <img src="./img/download.png" alt="download" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
