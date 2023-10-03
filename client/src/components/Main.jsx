import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, InputAdornment, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CarList from "./CarList";

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <Box sx={{ backgroundColor: "#cccccc", minHeight: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingRight: "20px" }}>
          <Paper
            elevation={8}
            sx={{
              backgroundColor: "inherit",
              margin: "18px",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Container
                maxWidth="xs"
                style={{
                  margin: "0",
                  paddingLeft: "0px",
                  paddingRight: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "30px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    padding: "15px 15px",
                    marginLeft: "0",
                  }}
                >
                  <input
                    type="search"
                    id="search"
                    placeholder="Search"
                    style={{
                      flex: "1",
                      border: "none",
                      outline: "none",
                    }}
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                </div>
              </Container>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <CarList searchQuery={searchQuery} />
    </Box>
  );
};

export default Main;
