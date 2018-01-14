'use strict';

var app = app || {};
(module => {

  const bookDetailPage = {};

  const markup = `
            <div>
                <div>
                <button class="update-book" data-book_id="{{book_id}}">UPDATE</button>
                <button class="delete-book" data-book_id="{{book_id}}">DELETE</button>
                    <div>
                        <img src="{{{image_url}}}" alt="" width="400">
                    </div>
                    <div>
                        <h3>{{title}}</h3>
                        <h4>by {{author}}</h4>
                        
                    </div>
                </div>
                <div>
                    {{description}}
                </div>
                <hr>
            </div>
    `

  bookDetailPage.init = (book) => {
    $('#book-detail-slot').empty()
    $('#book-detail-page').show()
    $('#book-detail-page').off()
    const template = Handlebars.compile(markup)
    $('#book-detail-slot').append((template(book)))
        
    $('#book-detail-page').on('click', '.delete-book', (event) => {
      const book_id = $(event.target).data('book_id')
      app.Book.delete(book_id);
    })
    $('#book-detail-page').on('click', '.update-book', (event) => {
      const book_id = $(event.target).data('book_id')
      page('/book-edit-page/' + book_id)
    })
  }
        
  module.bookDetailPage = bookDetailPage
})(app)