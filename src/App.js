import React, { useRef } from 'react'
import ReactPaginate from 'react-paginate';
import data from './data.json'
import { CSVLink, CSVDownload } from "react-csv";
import './App.css'
const App = () => {
  const [users, setUsers] = React.useState(data)
  const [pageNumber, setPageNumber] = React.useState(0)
  const [userPerPage, SETUserPerPage] = React.useState(10)
  const [chunksData, setChunksdata] = React.useState(null)
  const [mltipledownload, setMultipleDownlod] = React.useState()
  const [count, setCount] = React.useState(0)
  const pageVisted = pageNumber * userPerPage;
  const csvLink = useRef()
 
  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];


  React.useEffect(() => {
    if (userPerPage > 0) {
      const dataget = users.slice(0, userPerPage);
      setChunksdata(dataget)
    }
  }, [userPerPage])


  const displayUser = users.slice(pageVisted, pageVisted + userPerPage).map((user) => {

    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
      </tr>
    )
  })
  const pageCount = Math.ceil(users.length / userPerPage)
  const ChangePage = ({ selected }) => {
    setPageNumber(+selected)
  }

  const selectedValue = (e) => {
    SETUserPerPage(+e.target.value)
    console.log(+e.target.value, "e.target.value")
  }

  var perChunk = 100 // items per chunk    
  var result = chunksData && chunksData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])


  let Arraay = []
  React.useEffect(() => {
    if (result && result.length !== null) {

      result && result.forEach((element, i) => {
        chuncksData(element, i)

        // csvLink.current.link.click()
        // setMultipleDownlod(element)

      });
      // for (let i = 0; i < result.length; i++) {
      //   // console.log(i, result[i])
      //  
      //   chuncksData(i, result[i])


      //   // setMultipleDownlod(result[i])
      // }
    }
  }, [result])

  if (result && result.length !== null) {

  }


  function chuncksData(t, i) {
    console.log(i, t, "=====>")

  }


  console.log(Arraay, "mltipledownload=====>")


  return (
    <div style={{ textAlign: 'center' }}>

      <table border="1" >
        {displayUser}
      </table>
      <div style={{ display: "flex" }}>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={'next'}
          pageCount={pageCount}
          onPageChange={ChangePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
        <select style={{ width: "10%", height: "40px", float: "left" }} onChange={selectedValue}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
          <option value="1000">1000</option>

        </select>
      </div>
      <CSVLink data={users}

        filename='transactions.csv'
        ref={csvLink}
        target='_blank'
      >
        Download me
      </CSVLink>


    </div>
  )
}

export default App
