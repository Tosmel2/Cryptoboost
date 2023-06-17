import React from 'react'
// import GaugeChart from 'react-gauge-chart'
// import GaugeComponent from 'react-gauge-component'

const dashboard = () => {
  return (
    <>
      <main className='flex h-screen'>
        <aside className='w-[15%] h-full bg-purple-600'>

        </aside>
        <section className='w-[85%] h-full bg-slate-50 mx-auto p-5 md:px-20 md:py-8'>
          <div className='md:flex justify-between'>
            <div className='shadow w-full mb-3 md:w-[32%] h-32 md:h-44 bg-white rounded-2xl p-5'>Testring</div>
            <div className='shadow w-full mb-3 md:w-[32%] h-32 md:h-44 bg-white rounded-2xl p-5'>Testring</div>
            <div className='shadow w-full mb-3 md:w-[32%] h-32 md:h-44 bg-white rounded-2xl p-5'>Testring</div>
          </div>

          <div className='md:flex justify-between'>
            <div className='shadow w-full mb-3 md:w-[32%] h-32 md:h-44 bg-white rounded-2xl p-5'>Testring</div>
            <div className='shadow w-full mb-3 md:w-[32%] h-32 md:h-44 bg-white rounded-2xl p-5'>Testring</div>
            <div className='shadow w-full mb-3 md:w-[32%] h-32 md:h-44 bg-white rounded-2xl p-5'>
            {/* <GaugeComponent
              value={50}
              type="radial"
              labels={{
                markLabel: {
                  type: "inner",
                  marks: [
                    { value: 20 },
                    { value: 40 },
                    { value: 60 },
                    { value: 80 },
                    { value: 100 }
                  ]
                }
              }}
              arc={{
                colorArray: ['#5BE12C','#EA4228'],
                subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
                padding: 0.02,
                width: 0.3
              }}
              pointer={{
                elastic: true,
                animationDelay: 0
              }}
            /> */}




              {/* <GaugeChart id="gauge-chart5"
                nrOfLevels={3}
                colors={["#FF5F6D", "#FFC371", "#00FF00"]}
                arcWidth={0.3}
                percent={0.37}
                // textColor="#000"
                // needleColor="#000"
                // needleBaseColor="#000"
                // hideText={true}
              /> */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default dashboard