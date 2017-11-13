import React, { Component } from 'react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(event) {

    }

    render() {
        let posts = this.props.data.map((post) => 
            <GalleryCard key={post.id} handleHover={e => this.handleHover(e)} likes={post.likes} comments={post.comments} alt={post.caption} src={post.url}/>
        )

        console.log(posts);

        let rows = [];
        for (let i = 0; i < posts.length / 3; i++) {
            let row = 
            <GalleryRow key={i}> 
                {posts[3 * i]}
                {posts[3 * i + 1]}
                {posts[3 * i + 2]}
            </GalleryRow>;

            rows.push(row);
        }
        return(
            <div>
                {rows}
            </div>
        )
    }
}

class GalleryRow extends Component {
    render() {
        return(
            <div className="gallery-row">
                {this.props.children}
            </div>
        )
    }
}

class GalleryCard extends Component {
    render() {
        return(
            <div className="gallery-card">
                <div className="gallery-image-wrapper">
                    <div className="gallery-image-slot">
                        <img className="gallery-image" alt={this.props.alt} src={this.props.src} />
                    </div>
                </div>
            </div>
        )
    }
}