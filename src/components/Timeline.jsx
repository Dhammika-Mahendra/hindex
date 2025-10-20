import React from 'react'

export default function Timeline({from,to,scale}) {

    // For positive numbers: round down for startYear, up for endYear
    // For negative numbers: round up for startYear, down for endYear
    let startYear = Math.ceil(from / 50) * 50;
    let endYear = Math.floor(to / 50) * 50;
    let blocks = Math.abs(startYear-endYear) / 50;

    const height = Math.abs(to - from) * scale;

  // Helper function to format year labels
  const formatYear = (year) => {
    if (year < 0) return `${Math.abs(year)} BC`;
    if (year > 0) return `${year} CE`;
    return '0';
  };

  return (
    <div style={{
        height:`${height}px`, width: '50px', backgroundColor: '#f0f0f0',
        display:'flex', flexDirection:'column', alignItems:'flex-start',justifyContent:'space-between'}}>
          
          <div style={{height: `${Math.abs(from-startYear) * scale}px`, width: '100%', display: 'flex',alignItems:'center', flexDirection: 'column', justifyContent: 'flex-end',borderBottom: from==to ? '':'1px solid black'}}>
            <p style={{fontSize: '14px'}}>{formatYear(startYear)}</p>
          </div>
           
            {
              /* Add above number of blocks with even height */
              Array.from({ length: blocks }).map((_, i) => (
                <div key={i} style={{ height: `${50 * scale}px`, width: '100%', borderBottom: '1px solid black', display: 'flex',alignItems:'center', flexDirection: 'column', justifyContent: 'flex-end'}}>
                  <p style={{fontSize: '14px'}}>{formatYear(startYear + (i + 1) * 50)}</p>
                </div>
              ))
            }
        <div style={{height: `${Math.abs(to-endYear) * scale}px`, width: '100%'}}></div>
    </div>
  )
}
