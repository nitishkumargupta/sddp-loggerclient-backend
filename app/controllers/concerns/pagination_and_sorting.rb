# app/controllers/concerns/pagination_and_sorting.rb
module PaginationAndSorting
  extend ActiveSupport::Concern

  included do
    around_action :add_total_count_header, only: :index
  end

  private

  def pageable_params
    {
      page: params.fetch(:page, 1).to_i,
      per_page: params.fetch(:size, 20).to_i
    }
  end

  def sort_params
    sort = params.fetch(:sort, 'id,desc')
    sort_column, sort_direction = sort.split(',')

    {
      sort_column: sort_column,
      sort_direction: sort_direction
    }
  end

  def apply_pagination_and_sorting(scope, query = nil)
    pageable = pageable_params
    sort = sort_params

    if query.present?
      # Use Elasticsearch for searching when a query is provided
      scope.search(query, pageable.merge(sort))
    else
      # Use ActiveRecord for regular listing without searching
      scope.order("#{sort[:sort_column]} #{sort[:sort_direction]}").paginate(page: pageable[:page], per_page: pageable[:per_page])
    end
  end

  def add_total_count_header(&block)
    # Execute the original action
    block.call

    # Check if the response body contains a JSON array
    begin
      json = JSON.parse(response.body)
    rescue JSON::ParserError
      return
    end

    return unless json.is_a?(Array)

    # Calculate the total count based on the current scope
    controller_name = self.controller_name.classify.constantize
    response.headers['X-Total-Count'] = controller_name.count.to_s
  end


end
