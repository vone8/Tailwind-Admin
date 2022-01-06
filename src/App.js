import './App.css';
import { AreaChart, Area, PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import adminLogo from '../src/img/admin-logo.png';
import iconDashboard from '../src/img/dashboard-icon.png';
import iconAnalytics from '../src/img/analytics-icon.png';
import iconCampaign from '../src/img/campaign-icon.png';
import iconTeam from '../src/img/team-icon.png';
import iconMessages from '../src/img/message-icon.png';
import iconTask from '../src/img/tasks-icon.png';
import iconInbox from '../src/img/inbox-icon.png';
import iconCalendar from '../src/img/calendar-icon.png';
import iconSettings from '../src/img/settings-icon.png';
import iconUtility from '../src/img/utility-icon.png';
import iconSearch from '../src/img/search-icon.png';
import iconMessage from '../src/img/message-icon.png';
import iconInfo from '../src/img/info-icon.png';
import dummyAvatar1 from '../src/img/person-1.jpg';
import dummyAvatar2 from '../src/img/person-2.jpg';
import dummyAvatar3 from '../src/img/person-3.jpg';
import dummyAvatar4 from '../src/img/person-4.jpg';
import iconArrowGray from '../src/img/arrow-gray.png';
import iconArrowpurple from '../src/img/arrow-purple.png';

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];


function App() {
  return (
    <div ClassName="App">

      <div className="relative dark:bg-gray-800">
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div className="w-72  bg-theme-blue">
            <nav className="mt-10 px-6">
              <a href="/" className="p-2 flex mb-5">
                <img src={adminLogo} alt="admin-logo" />
              </a>
              <a className=" text-gray-600 hover:bg-theme-btn-blue hover:text-white dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="/">
                <img src={iconDashboard} alt="dashboard-icon" className="w-5" />
                <span className="mx-4 text-md font-normal">
                  Dashboard
                </span>
              </a>
              <a className=" text-gray-600 hover:bg-theme-btn-blue hover:text-white dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="/">
                <img src={iconAnalytics} alt="dashboard-icon" className="w-5" />
                <span className="mx-4 text-md font-normal">
                  Analytics
                </span>
              </a>
              <a className="text-gray-600 hover:bg-theme-btn-blue hover:text-white dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="/">
                <img src={iconCampaign} alt="dashboard-icon" className="w-5" />
                <span className="mx-4 text-md font-normal">
                  Campaigns
                </span>
              </a>
              <a className="text-gray-600 hover:bg-theme-btn-blue hover:text-white dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="/">
                <img src={iconTeam} alt="dashboard-icon" className="w-5" />
                <span className="mx-4 text-md font-normal">
                  Team
                </span>
              </a>
              <a className=" text-gray-600 hover:bg-theme-btn-blue hover:text-white dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="/">
                <img src={iconMessages} alt="dashboard-icon" className="w-5" />
                <span className="mx-4 text-md font-normal">
                  Messages
                </span>
              </a>
              <a className=" text-gray-600 hover:bg-theme-btn-blue hover:text-white dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="/">
                <img src={iconTask} alt="dashboard-icon" className="w-5" />
                <span className="mx-4 text-md font-normal">
                  Tasks
                </span>
              </a>
              <a className=" text-gray-600 hover:bg-theme-btn-blue hover:text-white dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="/">
                <img src={iconInbox} alt="dashboard-icon" className="w-5" />
                <span className="mx-4 text-md font-normal">
                  Inbox
                </span>
              </a>
              <a className="text-gray-600 hover:bg-theme-btn-blue hover:text-white dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="/">
                <img src={iconCalendar} alt="dashboard-icon" className="w-5" />
                <span className="mx-4 text-md font-normal">
                  Calendar
                </span>
              </a>
              <a href="/" className=" text-gray-600 hover:bg-theme-btn-blue hover:text-white dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start">
                <img src={iconSettings} alt="dashboard-icon" className="w-5" />
                <span className="mx-4 text-md font-normal">
                  Settings
                </span>
              </a>
              <a className="text-gray-600 hover:bg-theme-btn-blue hover:text-white dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="/">
                <img src={iconUtility} alt="dashboard-icon" className="w-5" />
                <span className="mx-4 text-md font-normal">
                  Utility
                </span>
              </a>
            </nav>
          </div>
          <div className="w-full dash-container">
            <div className="h-14 shadow md:shadow-md flex justify-end">
              <div className="top-nav-icons flex items-center divide-x">
                <div className="px-2">
                  <img className="w-5 cursor-pointer" src={iconSearch} alt="Search Icon" />
                </div>
                <div className="px-2 relative">
                  <img className="w-5 cursor-pointer" src={iconMessage} alt="Message Icon" />
                  <span class="absolute rounded-full h-2 w-2 bg-blue-500 bottom-0 left-1/2 transform translate-x-1 -translate-y-4"></span>
                </div>
                <div className="px-2 ">
                  <img className="w-5 cursor-pointer" src={iconInfo} alt="Info Icon" />
                </div>
              </div>
            </div>
            <div className="pl-0 md:p-4 md:space-y-4">
              <div className="greeting">
                <div class="bg-theme-purple orange-100 text-black p-4 bg-[url('/src/img/greeting-bg.png')] bg-[center_right_5rem] bg-no-repeat" role="alert">
                  <p class="font-bold text-3xl leading-relaxed">Good Morning, Acme Inc.</p>
                  <p>Here is what's happening with  your projects today:</p>
                </div>
              </div>
              <div className="flex justify-between py-3">
                <div class="flex -space-x-2">
                  <a href="/">
                    <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src={dummyAvatar1} alt="Guy" />
                  </a>
                  <a href="/">
                    <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src={dummyAvatar2} alt="Max" />
                  </a>
                  <a href="/">
                    <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src={dummyAvatar3} alt="Charles" />
                  </a>
                  <a href="/">
                    <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src={dummyAvatar4} alt="Jade" />
                  </a>
                </div>
                <div className="flex">
                  <div>
                    <button class="bg-theme-purple2 text-white py-2 px-4 rounded">
                      <FontAwesomeIcon icon={['fab', 'google']} />Add View
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-wrap sm:flex-row ">
                <div className="w-full sm:w-1/2 xl:w-1/3">
                  <div class="shadow-md p-4 bg-white dark:bg-gray-700 w-full border-theme-gray">
                    <div className="flex justify-between">
                      <div>
                        <img src={iconArrowpurple} alt="Arrow Purple" />
                      </div>
                      <div className="relative cursor-pointer">
                        <span className="absolute rounded-full h-1.5 w-1.5 bg-theme-dark-gray bottom-0 left-1/2 transform -translate-x-1 -translate-y-3 "></span>
                        <span className="absolute rounded-full h-1.5 w-1.5 bg-theme-dark-gray bottom-0 left-1/2 transform -translate-x-3 -translate-y-3"></span>
                        <span className="absolute rounded-full h-1.5 w-1.5 bg-theme-dark-gray bottom-0 left-1/2 transform -translate-x-5 -translate-y-3"></span>
                      </div>
                    </div>
                    <div className="card">
                      <h4 className="text-xl font-bold my-2">Acme Plus</h4>
                      <span className="text-theme-dark-gray uppercase font-semibold block">Sales</span>
                      <div className="flex items-center my-2">
                        <span className="text-3xl inline-block font-bold">$24,400</span><span class="mx-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-600 rounded-full">99+</span>
                      </div>
                    </div>
                    <div className="card-charts mt-4">
                      <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3">
                  <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
                    <div class="shadow-md p-4 bg-white dark:bg-gray-700 w-full border-theme-gray">
                      <div className="flex justify-between">
                        <div>
                          <img src={iconArrowGray} alt="Arrow Gray" />
                        </div>
                        <div className="relative cursor-pointer">
                          <span className="absolute rounded-full h-1.5 w-1.5 bg-theme-dark-gray bottom-0 left-1/2 transform -translate-x-1 -translate-y-3 "></span>
                          <span className="absolute rounded-full h-1.5 w-1.5 bg-theme-dark-gray bottom-0 left-1/2 transform -translate-x-3 -translate-y-3"></span>
                          <span className="absolute rounded-full h-1.5 w-1.5 bg-theme-dark-gray bottom-0 left-1/2 transform -translate-x-5 -translate-y-3"></span>
                        </div>
                      </div>
                      <div className="card">
                        <h4 className="text-xl font-bold my-2">Acme Advance</h4>
                        <span className="text-theme-dark-gray uppercase font-semibold block">Sales</span>
                        <div className="flex items-center my-2">
                          <span className="text-3xl inline-block font-bold">$17,400</span><span class="mx-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-600 rounded-full">99+</span>
                        </div>
                      </div>
                      <div className="card-charts mt-4">
                        <BarChart width={450} height={300} data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="pv" fill="#8884d8" />
                          <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3">
                  <div class="shadow-md p-4 bg-white dark:bg-gray-700 w-full border-theme-gray">
                    <div className="flex justify-between">
                      <div>
                        <img src={iconArrowpurple} alt="Arrow Purple" />
                      </div>
                      <div className="relative cursor-pointer">
                        <span className="absolute rounded-full h-1.5 w-1.5 bg-theme-dark-gray bottom-0 left-1/2 transform -translate-x-1 -translate-y-3 "></span>
                        <span className="absolute rounded-full h-1.5 w-1.5 bg-theme-dark-gray bottom-0 left-1/2 transform -translate-x-3 -translate-y-3"></span>
                        <span className="absolute rounded-full h-1.5 w-1.5 bg-theme-dark-gray bottom-0 left-1/2 transform -translate-x-5 -translate-y-3"></span>
                      </div>
                    </div>
                    <div className="card">
                      <h4 className="text-xl font-bold my-2">Acme Professional</h4>
                      <span className="text-theme-dark-gray uppercase font-semibold block">Sales</span>
                      <div className="flex items-center my-2">
                        <span className="text-3xl inline-block font-bold">$9,400</span><span class="mx-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-yellow-600 rounded-full">99+</span>
                      </div>
                    </div>
                    <div className="card-charts mt-4">

                      <PieChart width={450} height={300}>
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                      </PieChart>

                    </div>

                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-wrap sm:flex-row ">
                <div className="w-full sm:w-1/2 xl:w-1/2">
                  <div class="shadow-md p-4 bg-white dark:bg-gray-700 w-full border-theme-gray">

                    <div className="card">
                      <h4 className="text-xl font-bold my-2">Acme Plus</h4>
                      <span className="text-theme-dark-gray uppercase font-semibold block">Sales</span>
                      <div className="flex items-center my-2">
                        <span className="text-3xl inline-block font-bold">$24,400</span><span class="mx-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-600 rounded-full">99+</span>
                      </div>
                    </div>
                    <div className="card-charts mt-4">

                      <AreaChart
                        width={750}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 0,
                          left: 0,
                          bottom: 5,
                        }}
                      >
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                      </AreaChart>

                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/2">
                  <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
                    <div class="shadow-md p-4 bg-white dark:bg-gray-700 w-full border-theme-gray">

                      <div className="card">
                        <h4 className="text-xl font-bold my-2">Acme Advance</h4>
                        <span className="text-theme-dark-gray uppercase font-semibold block">Sales</span>
                        <div className="flex items-center my-2">
                          <span className="text-3xl inline-block font-bold">$17,400</span><span class="mx-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-600 rounded-full">99+</span>
                        </div>
                      </div>
                      <div className="card-charts mt-4">
                        <BarChart
                          width={750}
                          height={300}
                          data={data}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                          <Bar dataKey="uv" fill="#ffc658" />
                        </BarChart>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div >
      </div >

    </div >
  );
}

export default App;
