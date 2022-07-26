import CustomClasses from './components/CustomClasses/CustomClasses'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Header from './components/containers/Header/Header'
import Image from './components/Image/Image'
import MultifieldExampleComponent from './components/MultifieldExampleComponent/MultifieldExampleComponent'
import ButtonType from './components/micro/ButtonType/ButtonType'
import Title from './components/micro/Title/Title'
import TextContent from './components/micro/TextContent/TextContent'
import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// Teste Component Mapping
MapTo('vue/components/multifield-example-component')(
  MultifieldExampleComponent,
  EditConfig
)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Title Component Mapping
MapTo('vue/components/title')(Title, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// TextContent Component Mapping
MapTo('vue/components/text-content')(TextContent, EditConfig)

// ButtonType Component Mapping
MapTo('vue/components/button-type')(ButtonType, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)
