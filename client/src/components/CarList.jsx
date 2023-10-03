import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "./Pagination";
import carData from "../assests/CarDetails.json";
import PeopleIcon from "@mui/icons-material/People";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import EvStationIcon from "@mui/icons-material/EvStation";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import { Fab } from "@mui/material";
const ITEMS_PER_PAGE = 6;

const CarList = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const filteredCars = carData.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    paddingLeft: "40px",
    maxHeight: "1000px",
    paddingBottom: "50px",
  };

  const cardStyle = {
    maxWidth: "530px",
    borderRadius: "8px",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
  };

  const rentPriceStyle = {
    fontSize: "24px", // Adjust the font size as needed
    fontWeight: "bold",
    color: "#000", // Dark color
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const carsToDisplay = filteredCars.slice(startIndex, endIndex);
  const hrStyle = {
    borderTop: "1.5px solid #6495ED",
    margin: "16px 0",
  };

  return (
    <>
      <div style={gridContainerStyle}>
        {carsToDisplay.map((car) => (
          <Card key={car.id} sx={cardStyle}>
            <CardMedia
              component="img"
              alt={car.name}
              height="280"
              src={`images/${car.image}`}
              sx={{
                borderRadius: "8px 8px 10px 10px",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car.name}
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PeopleIcon style={{ color: "#6495ED" }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ marginLeft: "8px" }}
                  >
                    {`${car.seater}`}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <LocalGasStationIcon style={{ color: "#6495ED" }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ marginLeft: "8px" }}
                  >
                    {`${car.fuelType}`}
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <EvStationIcon style={{ color: "#6495ED" }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ marginLeft: "8px" }}
                  >
                    {`${car.mileage}`}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <DisplaySettingsIcon style={{ color: "#6495ED" }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ marginLeft: "8px" }}
                  >
                    {`${car.transmissionType}`}
                  </Typography>
                </div>
              </div>
              <hr style={hrStyle} />
              <div
                style={{
                  paddingTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={rentPriceStyle}
                >
                  {`$${car.rentalPricePerMonth} /month`}
                </Typography>
                <Fab
                  disabled
                  aria-label="like"
                  variant="outlined"
                  style={{
                    borderColor: "#6495ED",
                    color: "#6495ED",
                  }}
                >
                  <FavoriteIcon />
                </Fab>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#6495ED",
                    borderRadius: "14px",
                    color: "white",
                  }}
                >
                  Rent Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Pagination
        totalPages={10}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default CarList;
