import styles from "../../../styles/Dashboard/CollegeDashboard.module.scss";
import {FaRegTrashAlt} from "react-icons/fa";


export  const alumniColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 230 , renderCell :(params) =>{
        return(
            <>
                <div className={styles.name__container}>
                <div className={styles.imgContainer}>
                    <img src={params.row.img} alt="profilePic" className={styles.profile__pic} />
                    {params.row.Name}
                    
                </div>
                <div className={styles.email__container}>
                    {params.row.email}
                </div>
                </div>
            </>
        )
    }},
    {field: "Branch", headerName: "Branch", width: 150},
    {field: "year", headerName: "Year of Passing", width: 150},
    {field: "Work", headerName: "Work", width: 150},
  
]



export const alumniRows = [
  
  {
    id: 1,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 2,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 3,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 4,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 5,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 6,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 7,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 8,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 9,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 10,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 11,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 12,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 13,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  },
  {
    id: 14,
    Name: "Satvik Pro",
    email:"satvikpro@satvik.com",
    img: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    Branch: "AIR",
    year: 2024,
    Work: "Google CEO",
    
  }
];
