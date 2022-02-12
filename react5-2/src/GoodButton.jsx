import React  from "react";

class GoodButton extends React.Component {
    handleClick(e) {
        console.log(e.target.textContent);
        console.log(e);

        alert('Why Do You Click It???');
    }

    render() {
        return (
            <button className="fancy-button"
                onClick={this.handleClick}
            >
                Click Me!
            </button>
        );
    }
} //Getting Syntetic Event (with using class method)

export default GoodButton;
