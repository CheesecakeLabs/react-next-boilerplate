import React from 'react'
import { storiesOf } from '@storybook/react'

import Modal, { Header, Body, Footer } from '_components/atoms/modal'
import loginIcon from '_storybook/assets/images/login-icon.svg'
import Button from '_components/atoms/button'

storiesOf('Modal', module).add('Modal', () => (
  <Modal isOpen>
    <Header>Happy Text</Header>
    <Body>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </Body>
    <Footer>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </Footer>
  </Modal>
))

storiesOf('Modal', module).add('Modal with Two Buttons', () => (
  <Modal isOpen>
    <Header>Happy Text</Header>
    <Body>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </Body>
    <Footer>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </Footer>
  </Modal>
))

storiesOf('Modal', module).add('Modal with an X', () => (
  <Modal isOpen>
    <Header>Super Happy Text</Header>
    <Body>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </Body>
    <Footer>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </Footer>
  </Modal>
))
