import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  paddingTop: 50,
  paddingBottom: 50,
  marginRight: 60,
  display: "flex",
  justifyContent: "flex-end",
});

const PaginationButton = styled("button")({
  padding: "7px 15px",
  margin: "0 5px",
  fontWeight: "bold",
});

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const { items } = usePagination({
    count: totalPages,
    page: currentPage,
    onChange: (event, page) => onPageChange(page),
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <PaginationButton
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
              >
                {page}
              </PaginationButton>
            );
          } else {
            children = (
              <PaginationButton type="button" {...item}>
                {type}
              </PaginationButton>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
