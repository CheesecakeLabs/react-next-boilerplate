import React from 'react'
import { storiesOf } from '@storybook/react'

import Modal from '_components/atoms/modal'
import loginIcon from '_storybook/assets/images/login-icon.svg'
import Button from '_components/atoms/button'

storiesOf('Modal', module).add('Modal', () => (
  <Modal isOpen>
    <Modal.Header>Happy Text</Modal.Header>
    <Modal.Body>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </Modal.Body>
    <Modal.Footer>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </Modal.Footer>
  </Modal>
))

storiesOf('Modal', module).add('Modal with Two Buttons', () => (
  <Modal isOpen>
    <Modal.Header>Happy Text</Modal.Header>
    <Modal.Body>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </Modal.Body>
    <Modal.Footer>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </Modal.Footer>
  </Modal>
))

storiesOf('Modal', module).add('Modal with an X', () => (
  <Modal isOpen>
    <Modal.Header>Super Happy Text</Modal.Header>
    <Modal.Body>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </Modal.Body>
    <Modal.Footer>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </Modal.Footer>
  </Modal>
))
