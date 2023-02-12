import './app-info.css';


const AppInfo = ({increase, employees}) => {
    return(
        <div className="app-info">
            <h1>Accounting of employees in the company N</h1>
            <h2>Total number of employees:{employees}</h2>
            <h2>Will receive the award:{increase}</h2>
        </div>
    )
}


export default AppInfo;