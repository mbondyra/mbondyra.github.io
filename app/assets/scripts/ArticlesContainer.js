import  React from 'react';
import  ReactDOM from 'react-dom';

import articleData from './articlesData'
import Article from './Article'


class ArticlesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTag: null
        }
    }

    setActiveTag(tag) {
        let activeTag = tag;
        if (this.state.activeTag == tag){
            activeTag = null
        }
        this.setState({
            activeTag: activeTag
        });
    }

    filterByTag(article) {
        if (!this.state.activeTag) {
            return true;
        }
        return article.tags.some(tag => tag == this.state.activeTag);
    }


    render() {
        console.log(this.state);
        let that = this;
        return (
            <div>{
                this.props.articles
                    .filter(this.filterByTag.bind(this))
                    .map((a) => <Article data={a} setActiveTag={this.setActiveTag.bind(this)} activeTag = {this.state.activeTag}/>)
            }</div>
        );
    }
}

if (document.getElementById('articles')) {
    ReactDOM.render(
        <ArticlesContainer articles={articleData}/>,
        document.getElementById('articles')
    );
}