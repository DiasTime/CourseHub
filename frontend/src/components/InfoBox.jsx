import { FaDoorOpen } from 'react-icons/fa';
import { MdCollectionsBookmark } from 'react-icons/md';
import { LiaCertificateSolid } from 'react-icons/lia';

const InfoBox = ({ icon }) => {
  return (
    <>
      <div className="infoBox">
        <FaDoorOpen className="infoBoxIcon" />
        <p className="infoBoxTitle">Access Any Where</p>
        <p className="infoBoxDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque libero
          explicabo ea atque repellendus similique sequi culpa error deserunt.
        </p>
      </div>
      <div className="infoBox">
        <MdCollectionsBookmark className="infoBoxIcon" />
        <p className="infoBoxTitle">Access Any Where</p>
        <p className="infoBoxDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque libero
          explicabo ea atque repellendus similique sequi culpa error deserunt.
        </p>
      </div>
      <div className="infoBox">
        <LiaCertificateSolid className="infoBoxIcon" />
        <p className="infoBoxTitle">Access Any Where</p>
        <p className="infoBoxDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque libero
          explicabo ea atque repellendus similique sequi culpa error deserunt.
        </p>
      </div>
    </>
  );
};

export default InfoBox;
