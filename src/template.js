module.exports = function() {
  return function(h) {

  var items = [];

  this.pages.map(function(page) {
      items.push(
        <a class={"pagination-link "+this.activeClass(page)} href="javascript:void(0);"
        on-click={this.setPage.bind(this, page)}>{page}</a>
        )
  }.bind(this));

  return <div>
  <nav class={"pagination " +this.modifiers}>
  <a class="pagination-previous" disabled={this.pageLinkDisabled(this.page-1)} href="javascript:void(0);"
  on-click={this.prev.bind(this)}>&lt;</a>
  <a class="pagination-next" disabled={this.pageLinkDisabled(this.page+1)} href="javascript:void(0);"
  on-click={this.next.bind(this)}>&gt;</a>

  <ul v-show={this.totalPages>1}
  class="pagination-list">

  <li>
  <a class="pagination-link" disabled={this.chunkLinkDisabled(-1)} href="javascript:void(0);"
  on-click={this.setChunk.bind(this,-1)}>&lt;&lt;</a>
  </li>

  {items}

  <li>
  <a class="pagination-link" disabled={this.chunkLinkDisabled(1)} href="javascript:void(0);"
  on-click={this.setChunk.bind(this,1)}>&gt;&gt;</a>
  </li>
  </ul>
  </nav>
  <p v-show={parseInt(this.records)} class="has-text-centered">{this.count}</p>
</div>

}
}
