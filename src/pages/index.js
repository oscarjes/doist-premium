import React from "react";
import Link from "gatsby-link";
import Hero from "../components/hero";
import Features from "../components/features";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      highlights: [
        {
          icon: "🛎",
          order: 1,
          selected: true,
          headline: "Get reminded automatically",
          text:
            "on your phone, via email, or at a specific location. Never lose sleep over missing an important date or deadline again"
        },
        {
          icon: "️⬜",
          order: 2,
          selected: false,
          headline: "Create your own templates",
          text:
            "for the projects you repeat often, and rest assured that every detail is already accounted for."
        },
        {
          icon: "️☁",
          order: 3,
          selected: false,
          headline: "Get automatic backups of your data",
          text:
            "and never worry about losing any of your tasks, projects, comments, or files."
        }
      ],
      selectedImage: '1'
    };
    
  }

  handleClick(e, key) {
    console.log('clicked ' + key);
    this.setState({
      selectedImage: key
    })
  }

  render() {
    return (
      <div className="">
        <Hero />
        <Features
          handleClick={this.handleClick}
          highlights={this.state.highlights}
          selectedImage={this.state.selectedImage}
        />
      </div>
    );
  }
}

export default IndexPage;
