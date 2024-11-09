import { useState } from 'react';
import { glory3601, glory36010, glory36011, glory36012, glory36013, glory36014, glory36015, glory36016, glory36017, glory36018, glory36019, glory3602, glory36020, glory36021, glory36022, glory3603, glory3604, glory3605, glory3606, glory3607, glory3608, glory3609} from '../assets/Image/ImportImage';


export default function View360() {
    const [rangeValue, setRangeValue] = useState(1);

    // Fungsi yang dipanggil saat input range digeser
    const handleRangeChange = (event) => {
      const newValue = parseInt(event.target.value);
      setRangeValue(newValue);
    };
  
    // Daftar gambar Anda dalam objek
    const imageList = {
      1: glory3601,
      2: glory3602,
      3: glory3603,
      4: glory3604,
      5: glory3605,
      6: glory3606,
      7: glory3607,
      8: glory3608,
      9: glory3609,
      10: glory36010,
      11: glory36011,
      12: glory36012,
      13: glory36013,
      14: glory36014,
      15: glory36015,
      16: glory36016,
      17: glory36017,
      18: glory36018,
      19: glory36019,
      20: glory36020,
      21: glory36021,
      22: glory36022,
    };
  return (
    <>
     <div className="container">
      <input
        type="range"
        value={rangeValue}
        min="1"
        max="22"
        id="range"
        onChange={handleRangeChange} // Mengaitkan fungsi handleRangeChange dengan input range
        style={{
          position: 'absolute',
          width: '100%',
          top: 10,
          height: '100%',
          cursor: 'grabbing',
          zIndex: 2,
          opacity: 0,
        }}
      />
      <div id="main">
        <img src={imageList[rangeValue]} alt="" style={{ width: '100%' }} />
      </div>
    </div>
    
    
    </>
  )
}
