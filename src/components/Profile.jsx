import React, { Component } from 'react';
import Gallery from './Gallery.jsx';

export default class Profile extends Component {
    render() {
        return(
            <ContentWrapper>
                <ProfileHeader>
                    <HeaderLeft>
                        <ProfilePicture alt={this.props.profile.name} url={this.props.profile.pictureUrl} />
                    </HeaderLeft>
                    <HeaderRight>
                        <TopRow>
                            <h1 className="username">{this.props.profile.username}</h1>
                        </TopRow>
                        <Stats>
                            <li>
                                <TextItem head={this.props.profile.posts.size + " "} body="posts" />
                            </li>
                            <li>
                                <TextItem head={this.props.profile.followers + " "} body="followers" />
                            </li>
                            <li>
                                <TextItem head={this.props.profile.following + " "} body="following" />
                            </li>
                        </Stats>
                        <BottomRow>
                            <TextItem head={this.props.profile.name} body={this.props.profile.description} />
                        </BottomRow>
                    </HeaderRight>
                </ProfileHeader>
                <Gallery data={this.props.profile.posts.photos} />
            </ContentWrapper>
        )
    }
}

class ContentWrapper extends Component {
    render() {
        return(
            <article className="content">
                {this.props.children}
            </article>
        )
    }
}

class ProfileHeader extends Component {
    render() {
        return(
            <header className="main-header">
                {this.props.children}
            </header>
        );
    }
}

class HeaderLeft extends Component {
    render() {
        return(
            <div className="header-left">
                {this.props.children}
            </div>
        );

    }
}

class HeaderRight extends Component {
    render() {
        return(
            <section className="header-right">
                {this.props.children}
            </section>
        );

    }
}

class TopRow extends Component {
    render() {
        return(
            <div className="top-row">
                {this.props.children}
            </div>
        )
    }
}

class Stats extends Component {
    render() {
        return(
            <ul className="stats">
                {this.props.children}
            </ul>
        )
    }
}

class TextItem extends Component {
    render() {
        let bold = {
            "fontWeight": "bold"
        }

        return(
            <p><span style={bold}>{this.props.head + " "}</span>{this.props.body}</p>
        )
    }
}


class BottomRow extends Component {
    render() {
        return(
            <div className="bottom-row">
                {this.props.children}
            </div>
        )
    }
}

class ProfilePicture extends Component {
    render() {
        return(
            <div className="profile-pic-container">
                <img alt="profile" src={this.props.url} className="profile-image" />
            </div>
        )
    }
}

/*
- CONTENT
        - HEADER
            - PROFILE PIC
            - GENERAL INFO + STAT
        - GALLERY
            - ROW
                - 3 IMGS
*/