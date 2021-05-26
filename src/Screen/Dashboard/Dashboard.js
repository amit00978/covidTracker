import {
  FormControl,
  MenuItem,
  Select,
  CardContent,
  Card,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { get } from "../../network/axios";
import InfoBox from "../../InfoBox";
import Map from "../../common/component/Map/Map";
import Table from "../../common/component/table/Table";
import LineGraph from "../../LineGraph";
import { sortData, prettyPrintStart } from "../../util";
import "leaflet/dist/leaflet.css";
import { SearchBar } from "../../common/index";
import Slideshow from   "../../common/component/slideshow/slideshow"

function Dashboard(props) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [staticTableDataForSearch, setstaticTableDataForSearch] = useState([]);
  const [mapCenter, setMapCenter] = useState([20, 70]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [caseType, setCaseType] = useState("cases");

  useEffect(() => {
    getCountryInfo(country);
  }, []);
  useEffect(() => {
    // This code inside here will run once
    //When the component loads and not again

    const getConntriesData = async () => {
      try {
        const data = await get("/v3/covid-19/countries");
        const countries = data.map((el) => ({
          name: el.country,
          value: el.countryInfo.iso2,
        }));
        let sortedData = sortData(data);
        setstaticTableDataForSearch(sortedData);
        setTableData(sortedData);
        setMapCountries(data);
        setCountries(countries);
      } catch (e) {
        console.log("eerr=", e);
      }
    };
    getConntriesData();
  }, []);

  const getCountryInfo = async (countryCode) => {
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    const data = await get(url);
    if (data && data.countryInfo) {
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setMapZoom(4);
    }

    setCountryInfo(data);
  };
  const handleChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
    getCountryInfo(countryCode);
  };
  const appStatus = [
    {
      caseKey: "cases",
      title: "Coronavirus cases",
      total: prettyPrintStart(countryInfo.todayCases),
      cases: prettyPrintStart(countryInfo.cases),
    },
    {
      caseKey: "recovered",
      title: "Recovered cases",
      total: prettyPrintStart(countryInfo.todayRecovered),
      cases: prettyPrintStart(countryInfo.recovered),
    },
    {
      caseKey: "deaths",
      title: "Deaths cases",
      total: prettyPrintStart(countryInfo.todayDeaths),
      cases: prettyPrintStart(countryInfo.deaths),
    },
  ];

  const _InfoBox = appStatus.map(({ caseKey, title, total, cases }) => (
    <InfoBox
      title={title}
      isNotRed={caseType == "recovered"}
      active={caseKey === caseType}
      total={total}
      cases={cases}
      caseKey={caseKey}
      onClick={(caseNewKey) => {
        setCaseType(caseNewKey);
      }}
    />
  ));
  const searchCountry = (text) => {
    let searchObj = staticTableDataForSearch;
    if (text) {
      searchObj = searchObj.filter((el) =>
        el.country.toLowerCase().includes(text.toLowerCase())
      );
    }
    setTableData(searchObj);
  };

  return (
    <div className="app">
      <div className="drawer_nav_left"></div>
      {/*------- Left Panel---------- */}
      <div className="drawer_nav_right">
        <div className="app__left">
          {/* Header */}
          <div className="app__header">
            <h1>Covid 19 TRACKER</h1>
            <FormControl className="app__dropdown">
              <Select
                variant="outlined"
                value={country}
                onChange={handleChange}
              >
                <MenuItem value={`worldwide`}>{`WorldWide`}</MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="app__stats">{_InfoBox}</div>

          <Map
            center={mapCenter}
            zoom={mapZoom}
            countries={mapCountries}
            casesType={caseType}
          />
        </div>
        <Card className="app__right">
          <CardContent>
            <h3> Countris Report</h3>
            <SearchBar
              placeholder="Search Country"
              classes={{
                searchContainer: {
                  marginLeft: 100,
                  backgroundColor: "red",
                },
              }}
              onChange={searchCountry}
              onCancelSearch={searchCountry}
              className="searchBar"
            />
            {/* Table */}
       
            <Table countries={tableData} />
            {/* Garpgh */}
                 <Slideshow />
            {/* <h3 className="world__title"> World Wide new {caseType}</h3>
            <LineGraph caseType={caseType} /> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
