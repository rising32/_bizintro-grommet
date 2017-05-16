import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Logo from 'grommet/components/icons/Grommet';
import Anchor from 'grommet/components/Anchor';
import SearchInput from 'grommet/components/SearchInput';
import Multistep from './react-multistep/';
import { steps } from './help-steps/index.js'

import ReactQuill from 'react-quill';

const store = { primary_contact: ''}

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, false] }],
    ['underline', 'bold', 'italic', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image']
  ],
};
const formats = [
  'header',
  'underline', 'bold', 'italic', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];



const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

class SidebarContent extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <Sidebar fixed={true} size='large' className="slide-bar-content">
        <Header size='large' justify='between' pad={{ horizontal: 'medium' }} className='slide-bar-title'>
          <Title>
            Make Intro
          </Title>
          <Button icon={<CloseIcon />} plain={true}
            a11yTitle='Close Menu' />
        </Header>

        <Section className='slide-bar-section'>
          Compose a message to let them know why you want Bethany Superdson to meet John Lillvon.
          <Box className='slide-bar-search'>
            <div>
              Introduction Message
            </div>
            <ReactQuill className="rich-editor"
                theme="snow"
                modules={modules}
                formats={formats}
               />
          </Box>
          <button className="help-sidebar-next" onClick={this.props.parentToggle.bind(this)}>Next</button>
        </Section>
      </Sidebar>
    );
  }
}


export default SidebarContent;
