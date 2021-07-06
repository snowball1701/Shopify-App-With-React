import React, { Component } from 'react'

import { ListMenu } from '../../../components/ListMenu/ListMenu.component'
import { CardGroupContainer } from './component/CardGroupContainer.component';

import { MediaCard } from '../../../components/index.components';
import { getData } from '../../../api/API';

import {CardGroup} from '../../../components/CardGroup/CardGroup.component'

class MainCustomers extends Component {
  state = {
    data:[{}]
  }

  // async componentDidMount() {
  //   const {data} =await getData('groceries', 1, 6)
  //   console.log(data)
  //   this.setState({ data })
  // }


  render() {
    return (
      <ListMenu>
      <section>

      <CardGroupContainer field='groceries' groupName={'نان'}/>
      <CardGroupContainer field='groceries' groupName={'لبنیات'}/>

   

      </section>
      </ListMenu>

    )
  }
}


export { MainCustomers }