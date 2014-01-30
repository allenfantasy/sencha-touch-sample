helpers do
  def json_for(user)
    result = if user.nil?
               { success: false }
             else
               user.as_json.merge({ success: true })
             end
    result.to_json
  end
end
