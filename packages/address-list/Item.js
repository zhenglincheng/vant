import { use } from '../utils';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';

const [sfc, bem] = use('address-item');

export default sfc({
  props: {
    data: Object,
    disabled: Boolean,
    switchable: Boolean
  },

  methods: {
    onSelect() {
      if (this.switchable) {
        this.$emit('select');
      }
    }
  },

  render(h) {
    const { data, disabled, switchable } = this;
    const Info = [
      <div class={bem('name')}>{`${data.name}，${data.tel}`}</div>,
      <div class={bem('address')}>{data.address}</div>
    ];

    return (
      <Cell
        class={bem({ disabled, unswitchable: !switchable })}
        isLink={!disabled && switchable}
        onClick={this.onSelect}
      >
        {disabled ? Info : <Radio name={data.id}>{Info}</Radio>}
        <Icon
          slot="right-icon"
          name="edit"
          class={bem('edit')}
          onClick={event => {
            event.stopPropagation();
            this.$emit('edit');
          }}
        />
      </Cell>
    );
  }
});
