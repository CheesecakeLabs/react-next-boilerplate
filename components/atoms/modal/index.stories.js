import React from 'react'
import { storiesOf } from '@storybook/react'

import loginIcon from '_storybook/assets/images/login-icon.svg'
import ModalBody from '_components/atoms/modal-body'
import CloseIcon from '_components/atoms/close-icon'
import ModalHeader from '_components/atoms/modal-header'
import ModalFooter from '_components/atoms/modal-footer'
import Button from '_components/atoms/button'

import Modal from './index'

storiesOf('Modal', module).add('Modal', () => (
  <Modal isOpen>
    <ModalHeader>Happy Text</ModalHeader>
    <ModalBody>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </ModalBody>
    <ModalFooter>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </ModalFooter>
  </Modal>
))

storiesOf('Modal', module).add('Modal with Two Buttons', () => (
  <Modal>
    <ModalHeader>Happy Text</ModalHeader>
    <ModalBody>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </ModalBody>
    <ModalFooter>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </ModalFooter>
  </Modal>
))

storiesOf('Modal', module).add('Modal with an X', () => (
  <Modal>
    <ModalHeader closeIcon={<CloseIcon />}>Super Happy Text</ModalHeader>
    <ModalBody>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </ModalBody>
    <ModalFooter>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </ModalFooter>
  </Modal>
))
