import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import ErrorIcon from "@material-ui/icons/Error";
import CardActionArea from '@material-ui/core/CardActionArea';


class Cards extends Component {

constructor(props) {
    super(props);
    this.state = {
         
    };
} 

   style = {
    card : {
        maxWidth: "100%", 
        borderRadius : 25,
        margin : "1%",
        color : "#ffffff",
      },
      text : {
        color : "#000000"
      }
  }

  render() {
      const { repos} = this.props;
      const created = "Created " + repos.created_at
      
    return (
        
        <Card style={this.style.card}>
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar
                            alt="Remy Sharp"
                            src={repos.owner.avatar_url}
                            style={{background : "#ffffff"}}
                        />
                        }
                    title={<Typography variant="body2" style={this.style.text} component="h3">{repos.name}</Typography>}
                    subheader={<Typography variant="body2" style={this.style.text} component="h4">{created}</Typography>}

                />

                <CardContent>
                    <Typography variant="body2" style={this.style.text} component="p">
                        {repos.description}
                    </Typography>
                </CardContent>
                
                <CardActions >
                    <StarIcon style={{ color: "yellow", marginLeft : "1%" }}/> 
                    <Typography variant="body2" style={this.style.text} component="h3">{repos.stargazers_count}</Typography>
                    <ErrorIcon style={{ color: "red" }}/> 
                    <Typography variant="body2" style={this.style.text} component="h3">{repos.open_issues}</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
  }
}


export default Cards;