import React from "react";
import { EventList } from "./EventList";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import { Container, Row, Button, Col } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Eventgallery() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      style={{
        backgroundColor: "#f3f6f7",
      }}
    >
      <Container style={{ paddingTop: "5vh", paddingBottom: "5vh" }}>
        <h1 style={{textAlign: "center"}} id="eventgallerytitle">Event Gallery</h1>
        <Row style={{ paddingBottom: "3vh" }}>

          <MDBCarousel interval={10000} showIndicators dark showControls fade>
            <MDBCarouselInner>
              <MDBCarouselItem className="active">
                <MDBCarouselElement
                  src="https://raw.githubusercontent.com/DSC-TCET/Assets/main/image/events/30daysofcloud1.jpeg"
                  alt="..."
                />
                <MDBCarouselCaption>
                  <h5>Cloud Study Jam</h5>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem>
                <MDBCarouselElement
                  src="https://raw.githubusercontent.com/DSC-TCET/Assets/main/image/events/30daysofcloud2.jpeg"
                  alt="..."
                />
                <MDBCarouselCaption>
                  <h5>Cloud Study Jam</h5>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem>
                <MDBCarouselElement
                  src="https://raw.githubusercontent.com/DSC-TCET/Assets/main/image/events/hackthehackathon1.jpeg"
                  alt="..."
                />
                <MDBCarouselCaption>
                  <h5>Tech Talk</h5>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem>
                <MDBCarouselElement
                  src="https://raw.githubusercontent.com/DSC-TCET/Assets/main/image/events/hackthehackathon4.jpeg"
                  alt="..."
                />
                <MDBCarouselCaption>
                  <h5>Tech Talk</h5>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </Row>

        <br />
        <br />
        <div data-aos="fade-down">
        <h1 style={{textAlign: "center"}} id="eventgallerytitle">Our Past Events</h1>
        <br />
        <br />
        <Row>
          {EventList.map((item, index) => {
            return (
              <Col style={{ paddingBottom: "3vh" }} md={12} sm={12} lg={4}>
                <Card
                  style={{
                    Width: "80%",
                    boxShadow: "3px 3px 20px rgb(0 0 0 / 0.5)",
                  }}
                  key={index}
                >
                  <CardHeader title={item.title} subheader={item.date} />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.imageurl}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Button
                      rel="noreferrer"
                      href={item.url}
                      target="_blank"
                      style={{ fontSize: "1em", marginLeft: "0.5em" }}
                      variant="primary"
                    >
                      Know More
                    </Button>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>What was done:</Typography>
                      <Typography paragraph>
                        <ul>
                          <li>{item.agenda1}</li>
                          <li>{item.agenda2}</li>
                          <li>{item.agenda3}</li>
                          <li>{item.agenda4}</li>
                        </ul>
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Col>
            );
          })}
        </Row>
        </div>
      </Container>
    </div>
  );
}

export default Eventgallery;
