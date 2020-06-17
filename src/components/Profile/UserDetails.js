import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import PropTypes from "prop-types";

function UserDetails({ user, classes }) {
  const parsedBirthDate = new Date(user.birthDate);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell
              align="left"
              classes={{ root: classes.details }}
              style={{ fontWeight: "bold" }}
            >
              Name:
            </TableCell>
            <TableCell align="right" classes={{ root: classes.details }}>
              {user.firstName} {user.lastName}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="left"
              classes={{ root: classes.details }}
              style={{ fontWeight: "bold" }}
            >
              Date of birth:
            </TableCell>
            <TableCell align="right" classes={{ root: classes.details }}>
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }).format(parsedBirthDate)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="left"
              classes={{ root: classes.details }}
              style={{ fontWeight: "bold" }}
            >
              Country:
            </TableCell>
            <TableCell align="right" classes={{ root: classes.details }}>
              {user.country}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="left"
              style={{ fontWeight: "bold" }}
              classes={{ root: classes.details }}
            >
              Genres:
            </TableCell>
            <TableCell align="right" classes={{ root: classes.details }}>
              {user.genres.join(", ")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default UserDetails;
